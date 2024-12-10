import axios from "axios";
import { Employee } from "@/interfaces/Employee";

const API_URL = "http://localhost:5114/api/Employee";

export const getAllEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(API_URL);
  return response.data;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await axios.get<Employee>(`${API_URL}/${id}`);
  return response.data;
};

export const searchEmployeesByName = async (
  name: string
): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(`${API_URL}/search`, {
    params: { name },
  });
  return response.data;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
  const response = await axios.post(API_URL, employee, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const updateEmployee = async (
  id: string,
  employee: Employee
): Promise<void> => {
  await axios.put(`http://localhost:5114/api/Employee/${id}`, employee, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await axios.delete(`http://localhost:5114/api/Employee/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
