# Loja de Veículos
## Sobre o projeto

A aplicação consiste em um catálogo de veículos que oferece funcionalidades de gerenciamento.
Com ela, você pode criar novos registros de veículos, visualizar informações, realizar edições quando necessário e excluir registros existentes. Trata-se de uma aplicação simples projetada para ajudar no controle e organização de informações sobre veículos de forma rápida e eficaz.

# Layout
## Catálogo
Para cada objeto inserido, a aplicação gera automaticamente um card contendo todas as informações do veículo correspondente. 

![Catalogo](https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot/assets/103697602/9ba26748-1eb1-4cf1-a8ba-5f260d59ab79)

## Criação/Edição

Ao clicar em 'Adicionar' em um 'card' vazio ou em 'Editar' em um veículo já cadastrado, uma modal contendo os campos de informações do veículo é exibida, possibilitando o preenchimento desses dados. 

*Durante a edição, a modal é automaticamente preenchida com as informações existentes no 'card', simplificando para o usuário.

![CriacaoEdicao](https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot/assets/103697602/dc58fef4-92d9-420a-951b-3d37f7bea32f)


# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- Lombok
## Front end
- TypeScript / JS 
- ReactJS
- HTML / CSS 
## Dados
- Geração do ReactJS: Vite
- Manipulação no font end: axios / react-query
- Banco de dados: H2 Database

(Eu tinha iniciado com PostgreSQL, resolvi migrar para o H2 no intuito de facilitar caso queira rodar na sua máquina)

# Explicando Codigo
## Estrutura de pastas

A estrura de pastas foi construída buscando os conceitos de arquitetura limpa e SOLID, cada pasta e arquivo com suas reponsabilidades.
### Back end
- dto: Contém a classe que representa o objeto que será transitado pela nossa API.
- entities: Aqui temos o BO(Business Objects), a entidade de negócio.
- mappers: Mapeamento de dto para BO e de BO para dto.
- repositories: Temos nossa interface extendendo o JPARepository.
- usecases: Aqui seria nossos casos de uso, funcionalidades.
- presentations/controllers: Responsável por ministrar os 'endpoints' e as operações HTTP da API.

(Não criei uma pasta 'services' pois a aplicação não tem regras de negócio que precisam ser sepadas como 'service')

![image](https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot/assets/103697602/a2f2d262-e07f-4f0c-996f-4607bfa1c891)


### Front end
- components: Contém os componentes reutilizáveis que compõem a interface da aplicação.
- hooks: Encapsula a lógica de comunicação com a API e fornece funcionalidades para realizar solicitações HTTP.
- interface: interface TypeScript que descreve a estrutura e o formato dos dados.

![image](https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot/assets/103697602/44ead05b-5d05-4483-b756-66f86cad0569)

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot.git

# entrar na pasta do projeto back end
cd loja-de-veiculos-spring

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot.git

# entrar na pasta do projeto front end web
cd loja-de-veiculos-react

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Gabryel Alves de Freitas

É uma aplicação bem simples mas acredito que já deu para demonstrar a utilização do Spring Boot, espero que goste 🤙.


