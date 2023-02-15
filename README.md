# Fluxo de Dados

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar a estrutura que trabalhamos na aula ao vivo, então é um código que vocês já conhecem! 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/fluxo-de-dados-feedback-04v3iw

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

Hoje vimos que o gerenciamento de estado precisa ser pensado de uma forma que seja possível compartilhar dados entre todos os componentes da nossa aplicação. Às vezes precisamos modificar toda a estrutura de estados para que seja possível resolver certos problemas de props, já que só podemos passar props de pai pra filho.

Durante a aula vocês conseguiram trabalhar essa movimentação do estado para um nível superior, nesse caso, o `App,js`. Agora vamos implementar mais algumas funcionalidades à aplicação, já que ela trazia alguns problemas esquisitos.

# Parte 2:
## interpretação de código

Primeiro, vamos analisar todo o código que você está recebendo.

Você **não precisa** responder às questões abaixo dentro de seu projeto, mas é importante que leia o projeto e reflita sobre os questionamentos antes de prosseguir.

- Você recebeu um app já iniciado, com alguns componentes. O que cada componente faz?
- Pense na tela que você recebeu pronta e crie uma estrutura para ela, não é obrigatório, mas se quiser pode listar os componentes que faria ou mesmo desenhar essa organização em um papel isso ajuda muito a pensar em como é feito ou como iniciar um site.
- Você consegue entender a organização desta componentização ou faria diferente?


# Parte 2:
## mão na massa! (ou no código)

### exercício 1:
- **Primeiro:** você já leu a primeira parte e seguiu o passo a passo da leitura e interpretação do código?

- Controlar os inputs corretamente:
No arquivo `FormularioPostagem.js` temos 3 inputs que estão sem controle. Crie os estados necessários e faça o controle deles.

### exercício 2:
- Você deve ter notado que os dados já estão sendo salvos, mas não acessados no componente final. Pense no fluxo para que eles cheguem até lá:

1. estes dados são criados em qual componente?
2. os mesmos dados estão sendo modificados onde?
3. qual o componente precisa acessá-los?

A partir deste fluxo que você pensou, crie o código para que os dados enviados no input sejam exibidos na tela do lado direito (onde atualmente há atualmente um título, uma imagem e uma descrição fixos). 

**Dica:** este é um bom momento para usar aquele desenho ou esquema da parte 1, de como seriam os componentes, para tentar entender o fluxo e ter uma melhor visibilidade

### exercício 3:
- Você deve ter percebido que a página não possui um botão e assim que passamos as props corretamente, a imagem e descrição já aparecem em tempo real. Consegue entender o motivo disso acontecer?

- Encontre uma forma de agrupar as informações dos 3 inputs editados no exercício 1 em uma única variável de estado;

- Um comportamento que faria mais sentido seria existir um botão que ,ao clicar, exibiria a imagem, título e descrição na tela. Crie este botão e a função necessária para que o usuário possa ter o controle deste envio;

- Modifique o seu código, que atualmente usa as variáveis de estado que controlam os inputs para mostrar o conteúdo na tela, para que o novo estado que você criou seja responsável por isso;

- Provavelmente, se os valores dessa sua nova variável forem `undefined` em algum momento, a sua página vai quebrar. Como você resolveria isso?

- Já existe um botão estilizado no arquivo styles do componente `FormularioPostagem`, use este botão e aplique uma função de onClick onde, ao clicar, a postagem apareça no espaço à direita da tela;



