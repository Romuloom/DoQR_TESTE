"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para navegação no App Router do Next.js
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Table } from "@/components/Tabela";
import { getAllEmployees, deleteEmployee } from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const router = useRouter(); // Hook para navegação

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDeleteEmployee = async (id: string) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
    }
  };

  const handleAddEmployee = () => {
    router.push("/add"); // Redireciona para a página de cadastro
  };

  const handleEditEmployee = (id: string) => {
    router.push(`/edit/${id}`); // Redireciona para a página de edição
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Header onAddEmployee={handleAddEmployee} />
        <div className="mt-8">
          <Table
            employees={employees}
            onEdit={handleEditEmployee} // Atualizamos para usar o handler de edição
            onDelete={handleDeleteEmployee}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
