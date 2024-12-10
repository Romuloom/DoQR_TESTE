import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("E-mail inválido."),
  cpf: z
    .string()
    .regex(/^\d{11}$/, "CPF deve conter 11 números.")
    .transform((cpf) =>
      cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    ), // Formata o CPF
  phone: z.string().regex(/^\d{10,11}$/, "Número de celular inválido."),
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Data de nascimento inválida."),
  employmentType: z.enum(["CLT", "PJ"], { description: "Tipo de contratação" }),
  status: z.enum(["Ativo", "Inativo"], {
    description: "Status do funcionário",
  }),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;
