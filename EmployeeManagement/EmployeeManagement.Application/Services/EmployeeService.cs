using EmployeeManagement.Domain.Entities;
using EmployeeManagement.Domain.Interfaces;

namespace EmployeeManagement.Application.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IRepository<Employee> _repository;

        public EmployeeService(IRepository<Employee> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployeesAsync() => await _repository.GetAllAsync();

        public async Task<Employee> GetEmployeeByIdAsync(Guid id) => await _repository.GetByIdAsync(id);

        public async Task<IEnumerable<Employee>> SearchEmployeesByNameAsync(string name) =>
            await _repository.FindAsync(e => e.Name.Contains(name));

        public async Task AddEmployeeAsync(Employee employee)
        {
            Validação antes de adicionar
            if (string.IsNullOrWhiteSpace(employee.Name) || string.IsNullOrWhiteSpace(employee.Email))
            {
                throw new ArgumentException("Nome e Email são obrigatórios.");
            }

            await _repository.AddAsync(employee);
            await _repository.SaveChangesAsync();
        }

        public async Task UpdateEmployeeAsync(Employee employee)
        {
            Validação antes de atualizar
            if (string.IsNullOrWhiteSpace(employee.Name) || string.IsNullOrWhiteSpace(employee.Email))
            {
                throw new ArgumentException("Nome e Email são obrigatórios.");
            }

            _repository.Update(employee);
            await _repository.SaveChangesAsync();
        }

        public async Task DeleteEmployeeAsync(Guid id)
        {
            var employee = await _repository.GetByIdAsync(id);
            if (employee != null)
            {
                _repository.Delete(employee);
                await _repository.SaveChangesAsync();
            }
            else
            {
                throw new ArgumentException("Funcionário não encontrado.");
            }
        }
    }
}
