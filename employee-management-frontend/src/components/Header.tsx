import React from "react";

interface HeaderProps {
  onAddEmployee: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddEmployee }) => {
  return (
    <header className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700">
        Controle de Funcionários
      </h2>
      <p className="text-sm text-gray-500">Empresa DoQR Tecnologia</p>
      <div className="mt-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar Funcionário..."
          className="border border-gray-300 rounded-md p-2 w-full max-w-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <button
          onClick={onAddEmployee}
          className="ml-4 bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-600"
        >
          + Novo Funcionário
        </button>
      </div>
    </header>
  );
};
