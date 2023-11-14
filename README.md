# Loja de Veículos
## Sobre o projeto

A aplicação consiste em um catálogo de veículos que oferece funcionalidades gerenciamento, permitindo realizar operações de criação, visualização, edição e exclusão (CRUD) de registros de veículos.

# Layout
## Catálogo

## Criação/Edição


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
- Manipulação no font end: axios / react-query
- Banco de dados: H2 Database

(Eu tinha iniciado com PostgreSQL, resolvi migrar para o H2 no intuito de facilitar caso queira rodar na sua máquina)

# Explicando Codigo
## Estrutura de pastas

A estrura de pastas foi construída buscando os conceitos de arquitetura limpa e SOLID, cada pasta e arquivo com suas reponsabilidades.
### Back end
(Não criei uma pasta 'services' pois a aplicação não tem regras de negócio que precisam ser sepadas como 'service')
![image](https://github.com/GabryelFreitasDev/LojaDeVeiculos-SpringBoot/assets/103697602/c711e01c-8d30-409e-ad2a-deb638d7e5ea)

### Front end
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
