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

# Exercício 1

## Colocando a mão na massa para o exercício 1: 

Foi criada uma tela de "Login" na nossa aplicação. O seu trabalho vai ser:

- Controlar os inputs corretamente
- Agrupar esses dados em uma única variável
- Assim que o usuário clicar em "Fazer login", o nome e a foto de perfil devem aparecer dentro do componente `Header` da aplicação. A imagem e o nome devem seguir as seguintes especificações: 
    - Você pode usar o link da sua foto de perfil do Linkedin
    - A imagem será redonda e terá 50px de altura e 50px de largura
    - O nome do usuário deverá estar alinhado à imagem
    - ambos estarão alinhados à esquerda da logo `Insta4`
    
Um comportamento que já está implementado é o de troca de tela. Assim que clicamos no botão de login, somos levados para a próxima etapa do formulário, onde é possível fazer uma postagem no site.
Você pode reaproveitar a função `login` dentro do componente `FormularioLogin.js` para implementar as funcionalidades que farão o nome e foto de perfil aparecerem no `Header` 


# Exercício 2
## Colocando a mão na massa para o Exercício 2.

## O Exercício 2 está dividido em duas partes: análise de código e execução de algumas tarefas!

Primeiro, vamos analisar todo o código que vocês estão recebendo.

Você **não precisa** responder às questões abaixo dentro de seu projeto, mas é importante que leia o projeto e reflita sobre os questionamentos antes de prosseguir.

- Você deve ter percebido que a página não possui um botão e assim que passamos as props corretamente, a imagem e descrição já aparecem em tempo real. Consegue entender o motivo disso acontecer?

- Um comportamento que faria mais sentido seria existir um botão que ao clicar, a imagem, título e descrição aparecerem na tela, você conseguiria aplicar esta funcionalidade? Siga os passos a seguir para saber se você cumpriu todos os requisitos.


- Encontre uma forma de agrupar as informações dos 3 inputs em uma única variável de estado
- Ao invés de usar as variáveis de estado que controlam os inputs para mostrar o conteúdo na tela, use o novo estado que você criou
- Provavelmente, se os valores dessa sua nova variável forem `undefined` em algum momento, a sua página vai quebrar. Como você resolveria isso?
- Já existe um botão estilizado no arquivo styles do componente `FormularioCadastro`, use este botão e aplique uma função de onClick onde, ao clicar, a postagem apareça no espaço à direita da tela

