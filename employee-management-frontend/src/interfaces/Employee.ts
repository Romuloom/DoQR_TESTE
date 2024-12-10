export interface Employee {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  contractType: "CLT" | "PJ"; // Tipo Contratação
  status: "Ativo" | "Inativo";
}
