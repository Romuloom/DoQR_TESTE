namespace EmployeeManagement.Domain.Entities
{
    public class Employee
    {
        public Guid Id { get; set; } // Chave primária
        public string Name { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public string Phone { get; set; }
        public DateTime BirthDate { get; set; }
        public string EmploymentType { get; set; } // "CLT" ou "PJ"
        public string Status { get; set; } // "Ativo" ou "Inativo"
    }
}
