# Boas práticas em arquiteturas e formulários

### Aula 1 - Home

- Começamos um projeto utilizando o `angular/cli` como ferramenta de apoio em todo nosso fluxo de trabalho. Utilizando a opção `--strict`, ligamos mais verificações de tipo no nosso projeto, melhorando logo na largada a nossa qualidade do nosso código.
- Aprendemos como configurar o Bootstrap como framework de CSS global para nossa aplicação.
- Começamos também a estruturar nossa aplicação utilizando o módulo Angular. Com a técnica do lazy loading, melhoramos o carregamento inicial da nossa aplicação.
- Estudamos também como é composto um componente Angular e quais são os arquivos que o `angular/cli` gera para nós.
- Começamos a desenvolver nossa primeira funcionalidade: o formulário de Login.

### Aula 2 - Login

- Como interagir com nosso backend utilizando o serviço `HttpClient` do Angular.
- Como utilizar o mecanismo de Injeção de dependência do Angular para criar nossos próprios serviços e injetá-los nos nossos componentes.
- Vimos também como criar um formulário do tipo Template Driven, em que toda a montagem e a regra de negócio ficam no arquivo de template, e o Angular realiza o controle do modelo de dados utilizando o componente `ngModel`.
- Criamos um componente de mensagens genérico e aprendemos como receber parâmetros utilizando o `@Input` e como mostrar conteúdo dinâmico utilizando a interpolação do Angular.
- Por fim, implementamos as validações do nosso formulário HTML utilizando o `ngModel` para pegar a referência do campo para avaliar se ele está válido ou não.

### Aula 3 - Cadastro de usuário

- Como criar um formulário utilizando a técnica de formulários reativos, em que nós temos um pouco mais de configurações, mas ganhamos mais possibilidades e controle sobre o formulário.
- Estudamos a diretiva `routerLink` e como o Angular analisa o caminho passado, avaliando primeiro a rota do módulo do componente e depois a rota global.
- Criamos o serviço de cadastro de novo usuário e utilizamos a boa prática de criar uma interface para o retorno do backend e assim termos melhor produtividade e menos erros.

### Aula 4 - Validação de formulário assíncrono

- Exploramos o tópico de validações em formulário reativos no Angular. e aprendemos como aplicar validações comuns e padronizadas no nosso componente do nosso formulário, além de usar a classe utilitária `Validators`, padrão do Angular.
- Criamos uma validação customizada para um campo e vimos quais são os requisitos para uma função ser reconhecida como validação no Angular.
- Também trabalhamos em uma função de validação que avaliava mais do que um campo do nosso formulário.
- Por fim, criamos uma validação que consulta o backend da nossa aplicação e aprendemos sobre os operadores RXJS, uma biblioteca poderosa que o Angular utiliza.

### Aula 5 - Autenticação

- Começamos a tratar as informações do nosso usuário que o backend nos retorna na forma de um token JWT (Json Web Token).
- Instalamos uma biblioteca que nos ajuda a trabalhar com esse tipo de dado e criamos um serviço exclusivamente para tratar a gravação e recuperação do token.
- Criamos também um serviço que representa as operações com o usuário logado e nesse serviço decodificamos e fazemos o uso do objeto Subject do RXJS para propagar as alterações das informações do usuário.
- Por fim, criamos o cabeçalho e rodapé da nossa interface interagindo com esse serviço de Usuário.