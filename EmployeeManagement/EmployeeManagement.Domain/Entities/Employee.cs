namespace EmployeeManagement.Domain.Entities
{
    public class Employee
    {
        public Guid Id { get; set; } = Guid.NewGuid(); Chave primária inicializada
        public string Name { get; set; } = string.Empty; Valor padrão
        public string Email { get; set; } = string.Empty; Valor padrão
        public string CPF { get; set; } = string.Empty; Valor padrão
        public string Phone { get; set; } = string.Empty; Valor padrão
        public DateTime BirthDate { get; set; }
        public string EmploymentType { get; set; } = "CLT"; Valor padrão
        public string Status { get; set; } = "Ativo"; Valor padrão
    }
}
