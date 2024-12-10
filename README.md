
# Employee Management System

Este projeto é um sistema para gerenciar funcionários, permitindo operações de inserir, editar, excluir e consultar funcionários. A aplicação é composta por um backend em .NET, um frontend em React com Next.js e um banco de dados PostgreSQL utilizando Docker.

---

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [.NET SDK](https://dotnet.microsoft.com/download)

---

## Tecnologias Utilizadas

- **Backend:** .NET Core com Entity Framework
- **Frontend:** React + Next.js com TypeScript, TailwindCSS e Zod
- **Banco de Dados:** PostgreSQL (via Docker)
- **Gerenciamento do Banco:** pgAdmin (via Docker)

---

## Instruções para Rodar o Projeto

### 1. Configuração do Docker
1. Certifique-se de ter o Docker instalado.
2. No diretório do projeto, utilize o arquivo `docker-compose.yml` para subir o PostgreSQL e o pgAdmin:
   ```bash
   docker-compose up -d
   ```
   - O banco de dados estará acessível na porta **5432**.
   - O pgAdmin estará disponível em `http://localhost:8081` (email: `admin@admin.com`, senha: `admin`).

### 2. Configuração do Backend (.NET)
1. Navegue até o diretório do backend:
   ```bash
   cd EmployeeManagement/EmployeeManagement.API
   ```
2. Instale as dependências e aplique as migrações do banco de dados:
   ```bash
   dotnet restore
   dotnet ef database update
   ```
3. Inicie a aplicação:
   ```bash
   dotnet run
   ```
   - O backend estará rodando na porta **5114**. Acesse em: `http://localhost:5114`.

### 3. Configuração do Frontend (Next.js)
1. Navegue até o diretório do frontend:
   ```bash
   cd employee-management-frontend
   ```
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm run dev
   ```
   - O frontend estará rodando na porta **3000**. Acesse em: `http://localhost:3000`.

---

## Endpoints da API (Backend)

### Base URL: `http://localhost:5114/api`

1. **Criar Funcionário**
   - **POST** `/employees`
   - Body:
     ```json
     {
       "name": "Nome",
       "email": "email@exemplo.com",
       "cpf": "12345678900",
       "phone": "(99) 99999-9999",
       "birthDate": "2000-01-01",
       "employmentType": "CLT",
       "status": "Ativo"
     }
     ```

2. **Alterar Funcionário**
   - **PUT** `/employees/{id}`
   - Body: (mesmo formato do POST)

3. **Consultar Todos ou Filtrar por Nome**
   - **GET** `/employees?name=Nome`

4. **Excluir Funcionário**
   - **DELETE** `/employees/{id}`

---

## Acesso ao pgAdmin

1. Acesse o pgAdmin em `http://localhost:8081`.
2. Faça login com:
   - **Email:** `admin@admin.com`
   - **Senha:** `admin`
3. Adicione um novo servidor para o PostgreSQL:
   - **Hostname:** `postgres`
   - **Porta:** `5432`
   - **Username:** `admin`
   - **Senha:** `admin`
   - **Database:** `EmployeeDB`

---

## Estrutura do Projeto

### Backend
- `EmployeeManagement.API`: Contém os controladores e configurações da API.
- `EmployeeManagement.Application`: Camada de aplicação com serviços e regras de negócio.
- `EmployeeManagement.Domain`: Entidades e interfaces do domínio.
- `EmployeeManagement.Infrastructure`: Configurações do banco e repositórios.

### Frontend
- `src/components`: Componentes reutilizáveis, como formulário e tabela.
- `src/interfaces`: Interfaces TypeScript.
- `src/service`: Arquivo para comunicação com a API.
- `src/pages`: Páginas da aplicação.

