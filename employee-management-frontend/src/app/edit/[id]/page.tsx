"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { getEmployeeById, updateEmployee } from "@/service/employeeService";
import { EmployeeFormData } from "@/validation/employeeSchema";

const EditPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // Obtém o ID da URL
  const [employee, setEmployee] = useState<EmployeeFormData | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id as string);
        setEmployee(data);
      } catch (error) {
        console.error("Erro ao buscar funcionário:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (data: EmployeeFormData) => {
    try {
      await updateEmployee(id as string, data);
      console.log("Funcionário atualizado:", data);
      router.push("/"); // Redireciona para a página inicial após editar
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
    }
  };

  if (!employee) {
    return <div>Carregando...</div>; // Exibe um loader enquanto os dados estão sendo buscados
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <EmployeeForm employee={employee} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EditPage;
