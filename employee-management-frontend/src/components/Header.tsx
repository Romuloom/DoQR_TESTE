import React from "react";

interface HeaderProps {
  onAddEmployee: () => void;
  onSearch: (term: string) => void; // Callback para buscar
}

export const Header: React.FC<HeaderProps> = ({ onAddEmployee, onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value); // Passa o termo para o componente principal
  };
  return (
    <header className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-700">
        Controle de Funcionários
      </h2>
      <p className="text-sm text-gray-700">Empresa DoQR Tecnologia</p>
      <div className="mt-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar Funcionário..."
          className="border border-gray-300 rounded-md p-2 w-full max-w-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-700"
          onChange={handleInputChange} // Usa o evento para capturar o termo digitado
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
