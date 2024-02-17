# Projeto API - Grupo + Educação

Este projeto é um desafio para a vaga fullstack no Grupo + Educação. A API é construída utilizando Node.js com TypeScript, e segue uma arquitetura modular com foco na divisão entre recursos específicos do projeto (módulos) e configurações compartilhadas (shared).

## Features e Informações

### Do Front-End.

- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) - Rotas dinâmicas `./app/src/pages`
- [Vuejs 3](https://vuejs.org/)
- [Vuetify 3](https://vuetifyjs.com/en/getting-started/installation/#installation)
- [Vite 4](https://vitejs.dev/guide/)
- [Axios](https://axios-http.com/)
- [TS Composition API](https://vuejs.org/guide/typescript/composition-api.html)
- [Composables](https://vuejs.org/guide/reusability/composables.html)
- [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html)

### Do Back-End

- [Fastify](https://fastify.dev/docs/latest/Guides/Getting-Started/)
- [TypeORM](https://typeorm.io/)
- [Fast-JWT](https://nearform.github.io/fast-jwt/docs/api/)
- [Bycriptjs](https://www.npmjs.com/package/bcrypt)

## Pré-requisitos

- Node.js versão `v20.0`
- Linha de comando Bash
- Docker e Docker Compose (opcional para ambiente de desenvolvimento com containers)

## Estrutura do Backend

O backend está dividido em duas principais partes:

- `api`: Root do projeto do backend.
- `api/modules`: Contém os recursos do projeto, incluindo módulos como aluno e usuário.
- `api/shared`: Contém configurações compartilhadas entre os módulos, como rotas, middlewares, utils, etc.

## Como Rodar o Projeto Backend

### 1º Baixe e configure o projeto.

1. Clone o repositório e acesse o diretório do projeto.

```bash
git clone git@github.com:DevserIgor/challenge-full-stack-web.git
cd challenge-full-stack-web/api
```

2. Execute `yarn install` para instalar as dependências.

### 2º configure um banco de dados Postgres

- Suba um banco de dados PostgreSQL. Se estiver utilizando Docker Compose, execute `docker-compose up --build` para subir automaticamente a API e o banco de dados. Se preferir, você pode derrubar o container da aplicação e apenas executar o compose para o container do banco de dados.
  > No arquivo .env-example tem a configuração conforme o ambiente que subi com docker pelo composer disponivel em **`./docker-compose.yml`**
  > Host, porta, nome do banco e login (user e senha),

### Configurando o Ambiente

1. Crie e configure o arquivo `.env` conforme o exemplo disponível na pasta `api` (`.env.example`).

### Rodando Migrations

1. Com o banco de pé, ja configurado com o projeto, execute `yarn m:run` para criar as tabelas, e rodar as configurações iniciais do banco.

   **Isto irá criar também o usuario adimin que tem como dados as seguintes informações:**

   > Email: admin@admin.com
   > Senha: @admin321!

### Executando a Aplicação

- Execute `yarn dev` para iniciar a API na porta especificada no arquivo `.env`.

### Docker Compose

Para aqueles que preferem utilizar Docker para o ambiente de desenvolvimento:

- Um `docker-compose.yml` está disponível para configurar um banco PostgreSQL básico e subir a aplicação.
- Execute `docker-compose up --build` para iniciar os serviços.
- Após a execução, um banco de dados PostgreSQL estará disponível na porta `5432` ou na porta configurada pelo seu `.env`. As configurações padrão para este projeto estão especificadas no arquivo `.env`.

### Migrations

No arquivo de `package.json` há alguns scripts que podem te ajudar, nosso projeto está utilizando `typeORM` para as migrations, e gestão do banco de dados.
Após ja ter uma conexão com o banco de dados(conforme passo anterior) `yarn m:run` para rodar as migrations do projeto, assim vo

### Ferramentas para o Desenvolvimento

- **@types/bcryptjs**: Tipagens TypeScript para bcryptjs, facilitando o uso seguro de hashes de senha.
- **@types/node**: Fornece tipagens TypeScript para o Node.js, melhorando a experiência de desenvolvimento com autocompletação e checagem de tipos.
- **@types/pg**: Tipagens TypeScript para o PostgreSQL, ajudando na integração com o banco de dados com checagem de tipo.
- **@typescript-eslint/eslint-plugin** e **@typescript-eslint/parser**: Conjunto de ferramentas ESLint configuradas para analisar e assegurar a qualidade do código TypeScript.
- **eslint** e suas plugins (**eslint-config-airbnb-base**, **eslint-config-prettier**, **eslint-import-resolver-typescript**, **eslint-plugin-import**, **eslint-plugin-n**, **eslint-plugin-prettier**, **eslint-plugin-promise**): Configurações e plugins do ESLint para assegurar a consistência do código e seguir as melhores práticas.
- **prettier**: Ferramenta de formatação de código automática, garantindo a consistência do estilo de código.
- **ts-node** e **ts-node-dev**: Ferramentas para execução e desenvolvimento com TypeScript diretamente, sem a necessidade de compilação prévia.
- **tsconfig-paths**: Permite o uso de caminhos baseados no tsconfig.json em tempo de execução.
- **typescript**: Linguagem principal do projeto, adicionando tipagem estática para JavaScript, melhorando a qualidade do código e a experiência de desenvolvimento.

### Dependências

- **@fastify/cors**: Habilita o uso de CORS no Fastify, permitindo ou bloqueando requisições de domínios diferentes.
- **ajv-errors**: Permite customizar mensagens de erro de validação JSON Schema no AJV, melhorando a experiência do usuário final.
- **class-transformer**: Facilita a transformação de objetos plain JavaScript em instâncias de classes e vice-versa, útil para aplicar lógica de negócio em dados de entrada/saída.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`, facilitando a configuração do projeto em diferentes ambientes.
- **fast-jwt**: Biblioteca para criação e verificação de JWTs, essencial para autenticação e autorização em aplicações modernas.
- **fastify**: Framework web altamente performático para Node.js, focado em eficiência e baixa latência.
- **pg**: Cliente PostgreSQL para Node.js, permitindo a conexão e interação com bancos de dados PostgreSQL.
- **reflect-metadata**: Implementa metadados de reflexão para decorações em TypeScript, essencial para ORMs como TypeORM.
- **typeorm**: ORM para TypeScript e JavaScript, simplifica o trabalho com banco de dados através de operações de alto nível, suportando o padrão Active Record e Data Mapper.

---

## Como Rodar o Projeto Frontend

Super simples, `yarn install` && `yarn dev`
Isto irá subir o projero na porta padrão do vue.js

## Considerações Finais

Quero começar expressando minha gratidão por ter tido a oportunidade de contribuir para este projeto. Foi uma experiência incrível e estou muito satisfeito com o que consegui entregar. Mal posso esperar para conversar com a equipe e compartilhar minhas reflexões e decisões tomadas ao longo do desenvolvimento.

Admito que gostaria de ter conseguido fazer mais, especialmente no que diz respeito a testes unitários e à elaboração de uma documentação mais abrangente. Também tinha a intenção de detalhar melhor a arquitetura utilizada, mas, infelizmente, o tempo não foi meu aliado nessa jornada.

Ah, e preciso compartilhar uma peculiaridade que encontramos: se a aplicação fica rodando por muito tempo, por alguma razão que ainda estou tentando entender, o backend começa a falhar e a emitir tokens que não são válidos. Descobri que reiniciar o backend resolve o problema imediatamente, o que é um bom paliativo, mas estou determinado a encontrar uma solução definitiva para isso.

## Licença

Este projeto está licenciado sob a Licença MIT.
