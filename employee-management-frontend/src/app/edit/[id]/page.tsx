"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { getEmployeeById, updateEmployee } from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const EditPage: React.FC = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null); // Estado para armazenar os dados do funcionário
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id); // Busca os dados do funcionário pelo ID
        setEmployee(data);
      } catch (error) {
        console.error("Erro ao buscar funcionário:", error);
        alert("Erro ao carregar os dados do funcionário.");
        router.push("/"); // Redireciona para a home se houver erro
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id, router]);

  const handleSubmit = async (data: any) => {
    try {
      const formattedData = {
        ...data,
        id: id, // Inclua o ID do funcionário para edição
        cpf: data.cpf.replace(/[^\d]/g, ""), // Remova pontos e traços do CPF
        birthDate: new Date(data.birthDate).toISOString(), // Formate a data
      };

      console.log("Dados enviados para atualização:", formattedData);

      await updateEmployee(id, formattedData); // Atualize os dados no backend
      router.push("/"); // Redirecione para a página inicial após o sucesso
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
      alert(
        "Erro ao atualizar funcionário. Verifique os dados e tente novamente."
      );
    }
  };

  if (loading) {
    return <div>Carregando...</div>; // Mostra um carregando enquanto os dados são buscados
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {employee && (
          <EmployeeForm onSubmit={handleSubmit} initialData={employee} />
        )}{" "}
        {/* Passa os dados do funcionário para o formulário */}
      </div>
    </div>
  );
};

export default EditPage;
