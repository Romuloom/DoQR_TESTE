"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { createEmployee } from "@/service/employeeService";

const AddPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const formattedData = {
        ...data,
        cpf: data.cpf.replace(/[^\d]/g, ""),
        birthDate: new Date(data.birthDate).toISOString(), 
      };

      console.log("Dados enviados para criação:", formattedData);

    
      await createEmployee(formattedData);

      
      router.push("/");
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      alert(
        "Erro ao cadastrar funcionário. Verifique os dados e tente novamente."
      );
    }
  };

  return (
    <div className="w-full mt-11">
      <div>
        <button
          className="mb-6 flex items-center text-purple-600 font-medium hover:underline"
          onClick={() => router.push("/")}
        >
          <span className="mr-2 text-xl">←</span> Voltar
        </button>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Cadastrar Funcionário
          </h2>
          <p className="text-sm text-gray-500 mb-6">Empresa DoQR Tecnologia</p>
          <EmployeeForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddPage;
