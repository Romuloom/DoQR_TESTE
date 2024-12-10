"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { createEmployee } from "@/service/employeeService";

const AddPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      // Ajustar os dados antes de enviar
      const formattedData = {
        ...data,
        cpf: data.cpf.replace(/[^\d]/g, ""), // Remove pontos e traços do CPF
        birthDate: new Date(data.birthDate).toISOString(), // Converte para ISO
      };

      console.log("Dados enviados para criação:", formattedData);

      // Envia os dados formatados para o backend
      await createEmployee(formattedData);

      // Redireciona para a página inicial após o sucesso
      router.push("/");
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      alert(
        "Erro ao cadastrar funcionário. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddPage;
