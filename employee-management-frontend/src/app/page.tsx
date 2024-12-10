"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Table } from "@/components/Tabela";
import { getAllEmployees, deleteEmployee } from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Header onAddEmployee={() => console.log("Adicionar funcionário")} />
        <div className="mt-8">
          <Table
            employees={employees}
            onEdit={(id) => console.log(`Editar funcionário com ID: ${id}`)}
            onDelete={handleDeleteEmployee}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
