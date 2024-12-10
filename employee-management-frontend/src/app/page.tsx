"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Table } from "@/components/Tabela";
import {
  getAllEmployees,
  searchEmployeesByName,
  deleteEmployee,
} from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
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

  // Função para busca automática
  const handleSearch = async (term: string) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(async () => {
      try {
        if (term.trim() === "" || term.length < 3) {
          // Busca todos os funcionários se o termo for vazio ou menor que 3 caracteres
          const data = await getAllEmployees();
          setEmployees(data);
        } else {
          // Busca funcionários pelo termo
          const data = await searchEmployeesByName(term);
          setEmployees(data);
        }
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      }
    }, 300); // 300ms de debounce

    setDebounceTimeout(timeout);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este funcionário?"
    );
    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((employee) => employee.id !== id));
      alert("Funcionário deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
      alert("Erro ao deletar funcionário. Tente novamente.");
    }
  };

  return (
    <div className="bg-white min-h-screen w-screen">
      <Navbar />
      <main className=" mx-auto py-8  px-32">
        <Header
          onAddEmployee={() => router.push("/add")}
          onSearch={handleSearch} // Passa a função de busca para o Header
        />
        <div className="mt-8">
          <Table
            employees={employees}
            onEdit={(id) => router.push(`/edit/${id}`)}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
