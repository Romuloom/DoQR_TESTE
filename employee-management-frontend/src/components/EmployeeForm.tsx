"use client";

import React from "react";

interface EmployeeFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = React.useState(
    initialData || {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      birthDate: "",
      employmentType: "",
      status: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className=" w-full border shadow-md rounded-lg border-gray-300 p-5">
      <main className="w-full">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {initialData ? "Editar Funcionário" : "Cadastrar Funcionário"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">Empresa DoQR Tecnologia</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
                placeholder="Nome"
              />
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
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
                placeholder="E-mail"
              />
            </div>
            {/* CPF */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
                placeholder="00000000000"
              />
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
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
                placeholder="99999-9999"
              />
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
                className="mt-1 text-gray-700 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
              />
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
                className=" text-gray-700 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
              >
                <option value="">Selecione uma opção...</option>
                <option value="CLT">CLT</option>
                <option value="PJ">PJ</option>
              </select>
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
                className=" text-gray-700 mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2"
              >
                <option value="">Selecione uma opção...</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            {/* Botão */}
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600"
              >
                {initialData ? "Salvar Alterações" : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
