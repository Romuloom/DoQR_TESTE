import React from "react";
import { Employee } from "@/interfaces/Employee";

interface TableProps {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Table: React.FC<TableProps> = ({
  employees,
  onEdit,
  onDelete,
}) => {
  return (
    <table className="w-full border border-gray-300 shadow-md rounded-lg">
      <thead className="bg-gray-200 text-gray-600 text-sm">
        <tr>
          <th className="p-4 text-left">Nome</th>
          <th className="p-4 text-left">E-mail</th>
          <th className="p-4 text-left">CPF</th>
          <th className="p-4 text-left">Celular</th>
          <th className="p-4 text-left">Data de Nascimento</th>
          <th className="p-4 text-left">Tipo Contratação</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-center">Ação</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 text-sm text-gray-700">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-100">
              <td className="p-4">{employee.name}</td>
              <td className="p-4">{employee.email}</td>
              <td className="p-4">{employee.cpf}</td>
              <td className="p-4">{employee.phone}</td>
              <td className="p-4">{employee.birthDate}</td>
              <td className="p-4">{employee.employmentType}</td>
              <td
                className={`p-4 ${
                  employee.status === "Ativo"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {employee.status}
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onEdit(employee.id!)}
                  className="text-blue-500 hover:underline"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onDelete(employee.id!)}
                  className="text-red-500 ml-4 hover:underline"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center text-gray-500 p-6">
              Nenhum funcionário encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
