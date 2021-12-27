# Controle o fluxo de navegação

### Aula 1 - Cartão de animais

- Como criar um componente reutilizável, recebendo atributos utilizando o decorator `@Input`;
- Aprendemos a projetar um conteúdo externo no nosso componente utilizando a diretiva `ng-content`;
- Criamos um serviço e enviamos além dos parâmetros, o header da requisição utilizando o objeto `HttpHeaders`;
- Centralizamos a configuração do endereço da API utilizando o arquivo de environment.

### Aula 2 - Lista de animais

- Como criar uma página utilizando diversos componentes reutilizáveis utilizando a composição;
- Aprendemos a utilizar o operador `switchMap` para concatenar dois fluxos de informações e não realizar um subscribe dentro de outro subscribe;
- Aprendemos a utilizar guarda de rotas para controlar o fluxo de navegação do usuário em nossa aplicação.

### Aula 3 - Detalhe do animal

- Como parametrizar a rota da aplicação e utilizar essa informação com o serviço `ActivatedRoute`;
- Aprendemos como anexar o token a todas as requisições ao backend criando um serviço do tipo `Interceptor`;
- Criamos as funções de curtir e excluir e aprendemos mais sobre os operadores `mapTo` e `catchError`.

### Aula 4 - Comentários

- Como carregar informações do servidor enquanto a rota é carregada utilizando o serviço do tipo `Resolver`;
- Criamos o componente de comentários e anexamos ele ao nosso componente de detalhe do animal;
- Aprendemos a como resetar o formulário após a requisição utilizando o operador `tap`;
