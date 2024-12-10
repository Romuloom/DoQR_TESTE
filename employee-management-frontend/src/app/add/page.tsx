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
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddPage;
