# Desafio_Amparo :rocket:

## Projeto
   Criar página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano.

## Tecnologias utilizadas:

- Express
  > É um framework para Node. js.
  
- Cors
  > Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
  
- ts-node-dev
  > Versão aprimorada do node-dev que usa o ts-node sob o capô.
  
- PG
  > Cliente PostgreSQL sem bloqueio para Node.js. JavaScript puro e ligações libpq nativas opcionais.
  
- UUIDV4
  > O uuidv4 cria UUIDs da v4.
  
- Axios
  > Consultas em API's externas.
  
- TypeScript
  > É um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem

- EsLint
  > É uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript

- Prettier
  > Responsável por formatar o código de acordo com regras cadastradas.
  
- TypeORM
  > ORM (Object-Relational Mapper) para Node/TypeScript.
  
- Docker
  > É uma plataforma de código aberto para criação de ambientes isolados via container.
  
- Banco Postgres
  > Banco relacional Postgres.
  
- Material-UI
  > Componentes React para um desenvolvimento mais rápido e fácil


## Comandos Projeto
- Rodar comando yarn(tanto no front quanto no back)
  > Para baixar as dependecias.

- Rodando servidor yarn dev:server
  > Para iniciar o servidor NodeJS.
  
- Rodando servidor yarn start
  > Para iniciar o servidor React.js.

## Ajustes
- Ajustar o arquivo ormconfig.json com os dados da url, usuario e senha do banco Postgres
- Alterar apenas esses dados:

  ~~~JSON
  "type": "postgres",
  "host": "192.168.99.100",
  "port": 5433,
  "username": "postgres",
  "password": "amparo",
  "database": "desafio_amparo",
  ~~~

## API's
Foram criadas 5 rotas na aplicação, que são:

  - **get('/products') :** retorna todos os produtos cadastrados(pacote de dados FaleMais).
  - **post('/products') :** cria um produto no banco de dados(pacote de dados FaleMais).
  - **get('/prices') :** retorna todos os  ddd e preços de ligações cadastrados.
  - **post('/prices') :** cria um novo registro com DDD's e valor por minuto no banco de dados.
  - **post('/simulations') :** gera uma simulação comparando um pacote FaleMais contra uma ligação convencional.
 
