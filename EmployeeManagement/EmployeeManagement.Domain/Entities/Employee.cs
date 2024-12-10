namespace EmployeeManagement.Domain.Entities
{
    public class Employee
    {
        public Guid Id { get; set; } = Guid.NewGuid(); 
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string CPF { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public DateTime BirthDate { get; set; }
        public string EmploymentType { get; set; } = "CLT";
        public string Status { get; set; } = "Ativo";
    }
}
