"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { EmployeeForm } from "@/components/EmployeeForm";
import { getEmployeeById, updateEmployee } from "@/service/employeeService";
import { Employee } from "@/interfaces/Employee";

const EditPage: React.FC = () => {
  const { id } = useParams(); 
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id); 
        setEmployee(data);
      } catch (error) {
        console.error("Erro ao buscar funcionário:", error);
        alert("Erro ao carregar os dados do funcionário.");
        router.push("/"); 
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
        id: id, 
        cpf: data.cpf.replace(/[^\d]/g, ""), 
        birthDate: new Date(data.birthDate).toISOString(), 
      };

      console.log("Dados enviados para atualização:", formattedData);

      await updateEmployee(id, formattedData); 
      router.push("/"); 
    } catch (error) {
      console.error("Erro ao atualizar funcionário:", error);
      alert(
        "Erro ao atualizar funcionário. Verifique os dados e tente novamente."
      );
    }
  };

  if (loading) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="w-full mt-11">
      <button
        className="mb-6 flex items-center text-purple-600 font-medium hover:underline"
        onClick={() => router.push("/")}
      >
        <span className="mr-2 text-xl">←</span> Voltar
      </button>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Editar Funcionário
        </h2>
        <p className="text-sm text-gray-500 mb-6">Empresa DoQR Tecnologia</p>
        {employee && (
          <EmployeeForm onSubmit={handleSubmit} initialData={employee} />
        )}{" "}
      </div>
    </div>
  );
};

export default EditPage;
