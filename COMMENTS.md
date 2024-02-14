# Projeto API - Grupo + Educação

Este projeto é um desafio para a vaga fullstack no Grupo + Educação. A API é construída utilizando Node.js com TypeScript, e segue uma arquitetura modular com foco na divisão entre recursos específicos do projeto (módulos) e configurações compartilhadas (shared).

## Pré-requisitos

- Node.js versão `v20.0`
- Linha de comando Bash
- Docker e Docker Compose (opcional para ambiente de desenvolvimento com containers)

## Estrutura do Projeto

O projeto está dividido em duas principais partes:

- `api/modules`: Contém os recursos do projeto, incluindo módulos como aluno e usuário.
- `api/shared`: Contém configurações compartilhadas entre os módulos, como rotas, middlewares, utils, etc.

## Como Rodar o Projeto

### Configuração Inicial

1. Clone o repositório e acesse o diretório do projeto.
2. Execute `npm install` ou `yarn install` para instalar as dependências.

### Configurando o Banco de Dados

- Suba um banco de dados PostgreSQL. Se estiver utilizando Docker Compose, execute `docker-compose up --build` para subir automaticamente a API e o banco de dados. Se preferir, você pode derrubar o container da aplicação e apenas executar o compose para o container do banco de dados.

### Configurando o Ambiente

1. Crie e configure o arquivo `.env` conforme o exemplo disponível na pasta `api` (`.env.example`).

### Rodando Migrations

1. Com o banco de pé, ja configurado com o projeto, execute `yarn m:run` para criar as tabelas, e rodar as configurações iniciais do banco.
   > Isto irá criar também o usuario adimin que tem como:
   > Email: admin@admin.com
   > Senha: @admin321!

### Executando a Aplicação

- Execute `yarn dev` para iniciar a API na porta especificada no arquivo `.env`.

## Docker Compose (Opcional)

Para aqueles que preferem utilizar Docker para o ambiente de desenvolvimento:

- Um `docker-compose.yml` está disponível para configurar um banco PostgreSQL básico e subir a aplicação.
- Execute `docker-compose up --build` para iniciar os serviços.
- Após a execução, um banco de dados PostgreSQL estará disponível na porta `5432`. As configurações padrão para este projeto estão especificadas no arquivo `.env`.

## Licença

Este projeto está licenciado sob a Licença MIT.
