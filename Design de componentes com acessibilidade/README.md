# Design de componentes com acessibilidade

### Aula 1 - Preparando o terreno, primeiro componente

- Revisão de estrutura de um componente
- Input binding vs Event Binding
- O padrão para podermos utilizar two-way data binding

### Aula 2 - Integração com Reactive Forms

- Como integrar um custom component com Reactive Forms
- A interface `ControlValueAccessor`
- O papel do token `NG_VALUE_ACCESSOR`
- A utilizar `ngModel` e `formControlName` com um custom component

### Aula 3 - Acessibilidade

- Onde encontrar e como aplicar regras da WCAG
- O papel dos atributos ARIA
- Utilização do Chromevox como text reader
- A importância de se garantir um único ID
- Como evitar que mudanças em componentes externos afetem seu componente

### Aula 4 - Lidando com o teclado

- Como aplicar regras de interação com teclado da WCAG
- A importância do atributo tabindex
- A criar um KeyboardManager reutilizável
- A utilizar `@ContentChildren` para injeção de diretivas de marcação

### Aula 5 - Revisando o nosso componente

- Acessibilidade e o estado `disabled` de elementos
- Como gerenciar o estado `disabled` de um FormControl do Reactive Form
- A importância de começarmos utilizando componentes nativos do HTML para a Acessibilidade
- A reimplementar nosso componente para que utilize elementos nativos do HTML
