- Aplicação CRUD de Produtos

Este projeto consiste em uma aplicação CRUD completa para gerenciamento de produtos, desenvolvida com um backend em Node.js (Express) e Supabase (PostgreSQL), e um frontend em Angular com Angular Material.

-  Estrutura do Projeto

O projeto é dividido em duas partes principais:

- `backend/`: Contém a API RESTful desenvolvida com Node.js e Express, que se comunica com o Supabase.

- `frontend/`: Contém a aplicação web desenvolvida com Angular e Angular Material, que consome a API do backend.

- Backend (Node.js com Express e Supabase)

->  Descrição

O backend é uma API RESTful responsável por gerenciar as operações CRUD da entidade `products` no banco de dados Supabase. Ele segue uma arquitetura moderna com rotas, controladores e serviços para garantir a modularidade e manutenibilidade do código.

- Dependências

As principais dependências utilizadas no backend são:

- **Express**: Framework web para Node.js, utilizado para construir a API.

- **dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.

- **@supabase/supabase-js**: Cliente JavaScript para interagir com o Supabase.

- **cors**: Middleware para habilitar o Cross-Origin Resource Sharing (CORS).

### Instalação

1. **Clone o repositório** (se aplicável, para este cenário, considere que os arquivos estão no diretório `backend/`).

1. **Navegue até o diretório do backend**:

1. **Instale as dependências**:

1. **Configuração do Supabase**: Crie um arquivo `.env` na raiz do diretório `backend/` com as seguintes variáveis (substitua pelos seus dados):

1. **Configuração do Banco de Dados (Supabase)**: Certifique-se de que a tabela `products` esteja criada em seu projeto Supabase com a seguinte estrutura SQL:

### Execução

Para iniciar o servidor backend:

```bash
npm start

```
O servidor estará rodando em `http://localhost:3000` (ou na porta definida pela variável de ambiente `PORT`). A API de produtos estará disponível em `http://localhost:3000/api/products`.

## Frontend (Angular com Angular Material)

### Descrição

O frontend é uma aplicação Single Page Application (SPA) desenvolvida com Angular, que consome a API de produtos do backend. Ele utiliza o Angular Material para fornecer uma interface de usuário moderna e responsiva, com componentes como tabelas, formulários e botões para as operações CRUD.

### Dependências

As principais dependências utilizadas no frontend são:

- **Angular CLI**: Ferramenta de linha de comando para inicializar, desenvolver e manter aplicações Angular.

- **Angular Core**: O framework Angular em si.

- **Angular Material**: Biblioteca de componentes UI que implementa o Material Design.

- **RxJS**: Biblioteca para programação reativa, utilizada para lidar com eventos assíncronos.

### Instalação

1. **Clone o repositório** (se aplicável, para este cenário, considere que os arquivos estão no diretório `frontend/`).

1. **Navegue até o diretório do frontend**:

1. **Instale as dependências**:

1. **Configuração da API**: Certifique-se de que o URL da API do backend esteja configurado corretamente no ambiente Angular (geralmente em `src/environments/environment.ts` ou similar).

### Execução

Para iniciar a aplicação frontend:

```bash
ng serve
```

Isso iniciará o servidor de desenvolvimento e a aplicação estará disponível em `http://localhost:4200` (ou na porta indicada pelo Angular CLI).

## Como Usar

1. Certifique-se de que o backend esteja em execução.

1. Certifique-se de que o frontend esteja em execução.

1. Acesse a URL do frontend no seu navegador (`http://localhost:4200`).

1. Utilize a interface para adicionar, visualizar, editar e excluir produtos.


SQL Utilizada: 
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC
);

Credencias da API:

Link URL:  https://pjonazzkfgshmlaxzsrq.supabase.co/
API: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqb25henprZmdzaG1sYXh6c3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDc1NTUsImV4cCI6MjA3NjM4MzU1NX0.0VK_CgPEjVMQlkL2uIDzsz-fmJZAVaMacYaSyLNIxzk

## Video explicativo do código

https://youtu.be/CpRg2AYPlvI
