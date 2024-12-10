"use client";

import React, { useState } from "react";
import {
  EmployeeFormData as ZodEmployeeFormData, // Renomeamos o tipo importado para ZodEmployeeFormData
  employeeSchema,
} from "@/validation/EmployeeFormData";
import { z } from "zod";

interface EmployeeFormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  employmentType: "CLT" | "PJ";
  status: "Ativo" | "Inativo";
}

interface EmployeeFormProps {
  onSubmit: (data: EmployeeFormData) => void;
  initialData?: EmployeeFormData; // Dados iniciais para edição
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<EmployeeFormData>(
    initialData || {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      birthDate: "",
      employmentType: "CLT",
      status: "Ativo",
    }
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof EmployeeFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validar os dados usando o esquema Zod
      const validatedData = employeeSchema.parse(formData);
      onSubmit(validatedData); // Envia os dados validados para o callback
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Captura e mapeia os erros do Zod
        const fieldErrors: Partial<Record<keyof EmployeeFormData, string>> = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0] as keyof EmployeeFormData] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        {initialData ? "Editar Funcionário" : "Cadastrar Funcionário"}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        {/* E-mail */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        {/* CPF */}
        <div>
          <label className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
        </div>
        {/* Celular */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Celular
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        {/* Data de Nascimento */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Data de Nascimento
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm">{errors.birthDate}</p>
          )}
        </div>
        {/* Tipo de Contratação */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Contratação
          </label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="CLT">CLT</option>
            <option value="PJ">PJ</option>
          </select>
          {errors.employmentType && (
            <p className="text-red-500 text-sm">{errors.employmentType}</p>
          )}
        </div>
        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm">{errors.status}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-600"
      >
        {initialData ? "Salvar Alterações" : "Cadastrar"}
      </button>
    </form>
  );
};
