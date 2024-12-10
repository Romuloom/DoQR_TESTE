"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Table } from "@/components/Tabela";
import { getAllEmployees, deleteEmployee } from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const router = useRouter();

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

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este funcionário?"
    );
    if (!confirmDelete) return;

    try {
      await deleteEmployee(id); // Chama a API para deletar o funcionário
      setEmployees((prev) => prev.filter((employee) => employee.id !== id)); // Remove o funcionário da lista local
      alert("Funcionário deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
      alert("Erro ao deletar funcionário. Tente novamente.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Header onAddEmployee={() => router.push("/add")} />
        <div className="mt-8">
          <Table
            employees={employees}
            onEdit={(id) => router.push(`/edit/${id}`)} // Redireciona para editar funcionário
            onDelete={handleDelete} // Passa a função de deletar
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
