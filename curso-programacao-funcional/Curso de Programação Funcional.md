* Por que Programação funcional?
- Organizar uma linha de raciocínio
- Entender uma nova maneira de abordar os problemas
- Algumas tecnologias tem como requisito.

* O que é Programação Funcional?
> É um paradigma (uma maneira) de programação como a Orientada a Objetos, por exemplo
- Uma maneira de resolver problemas.

* Funções
- Pequenas tarefas dentro de uma função
- Abstrair um problema e isolar ele dentro de uma função
- Não modificar dados fora dela
- Pequenas e bem especificas no que fazem.

* Características principais da função
- Um dado (ou mais) entra em uma função e um novo dado sai.
- Não altera dados
- Não guarda 'stateless' -> estado

* Linguagens Funcionais
- JavaScript (multiparadigma -> pode trabalhar com outros paradigmas como POO)
- PHP (multiparadigma)
- Elixir
        } completamente funcionais
- Haskell

* Pontos Positivos
- Fácil manutenção 
- Fácil uso de testes
-- Funções isoladas e consistentes -> São funções bem trabalhadas também para os testes
- Códigos mais confiáveis

* Princípios
> Paraigmas
- Programação Imperativa
- Programação Declarativa

> Dados
- Imutabilidade
- Stateless

> Funções
- Independentes 
- Puras
- Higher-order
- First-class
- Composição

* Programação Imperativa e Declarativa
Exemplo usando JS criando uma função que eleva o número ao quadrado
```js
// arquivo progImpDec.js
// Função que eleva o número ao quadrado

// Imperativo: "Faça da seguinte forma!"
let number = 2 // -> Instrução de declarar uma variável
function squareImp () { // -> Instrução de declarar uma função
    return number * number
}
number = squareImp() // -> Instrução para o número invocar a função


// Declarativa: "O que fazer e não como fazer"
const squareDec = n => n * n // A função já é declarada recebendo as variáveis de forma neutra

console.log(squareDec(2))
```
> Programação Imperativar
- O código é pensado e gerado em sequência
- O código é pensado como um passo-a-passo, como uma receita de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

> Programação Declarativa
- O código é g erado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passpo a passo no código
- Programa funcional é um tipo de paradigma declarativo


* Imutabildiade
- Uma variável não vai variar
- Se você precisar mudar uma variável, você cria uma nova!

Exemplo em JS
```js 
const cart = {
    quantity: 2,
    total: 200
}

//bad 
cart.quantity = 3 // retornará erro

//good
const newCart = {...cart, quantity: 3} // '...cart' -> comando para pegar todos os atributos do objeto cart 
console.log(newCart)
```

* Stateless
- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não poderá variar

```js
//exemplo

// Statefull funcion
let number = 2 // 1o valor de number -> 1o estado
function square(){
    return number * number
} // A função utiliza um elemento fora dela, no caso o number = 2
number = square() // novo valor de number -> novo estado

//--------------------------------
// Stateless function
const square = n => n * n;  // -> nenhum estado é guardado
// Com a execução de uma função stateless, não precisamos atribuir elementos à função, portanto não há mudança de estados
// number nao foi definido. A função apenas realiza a instrução sem elementos externos

```

*** Funções *** 
- Funções independentes
- Funções Puras
- First-clss Functions
- High-order Functions
- Composições de Funções

> Funções independentes
- Deve ter ao menos 1 argumento (não podem ser dados passados do mundo externo)
- Deve retornar algo
- Nada que acontecer lé dentro afeta o escopo externo
-- dados imutáveis
-- não guarda estado
- Não faremos uso de loops (for, while), mas se houver necessidade, usaremos recursção (a função chama ela mesma)

```js
// arquivo independentFunct.js
const random = (number, Math) => {
    Math.floor(Math.random() * number)
}

// Recursive
// Find the factorial of a number
const factorial = x => {
    
    // if number is 0
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1)
}

console.log(factorial(4))
```

*** Funções puras ***
- Não deve depender de nenhum dado externo a não ser o que foi passado como argumento.
- Não deve sofrer nenhuma interferência do mundo externo a ela
- Se o arqgumento é o mesmo, o retorno não pode sre diferente
- Não terpa nenhum efeito colateral no seu código
-- Não irá modificar nenhum dado --> imutável
-- Não irá guardar nenhum estado --> stateless

```js

// Função impura 
// Exemplo 1: dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) { 
    return Math.PI * (radius * radius)   // <- Depende da api Math, que não foi passada como parâmetro.
}

// Exemplo 2: está alterando um dado externo
let person = {                          // <- elemento externo
    name: 'Rafael Camarda'
    age: 'jovem'
}

function changeName(name) {             // <- Atributo de elemento externo invocado na função. 
    person.name = name                  // <- Mudança no valor 'name' do elemento externo.
}

// Função pura ***
// Exemplo 1
const calcCircumferencePure = function (pi, radius) {
    return pi * (radius * radius)       // <- O argumento pi não sofrerá mudanças inesperadas por não se tratar de uma API externa
}

const changeNamePure = function (person, name) {
    ({...person, name})                   // aqui criamos um novo objeto e não alterações em um objeto já existente.
}

```

*** First-class ***
- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável

```js

//arquivo firstClass.js
const sayMyName = () => console.log('Rodando sayMyName como argumento first-class') // Função base
const runFunction = fn => fn()           // Função que roda outras funções (função referência) --> Aqui ela recebe uma função e a invoca

runFunction(sayMyName) // --> pode apenas executar a função com suas propriedades
runFunction(() => console.log('Rodando arrow function como first class')) // apenas executando uma função arrow em seu parâmetro
console.log(runFunction(Math.random))

```

*** High-order function ***
- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

```js 
// arquivo highOrder.js
// Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square) // A função map está recebendo outra função como parâmetro. No caso, mapeou os elementos de uma array ao mesmo tempo que aplicou a função square 
console.log(squaredNumber);

// Exempplo de um retorno de função (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeOut(fn, wait)

pause(600) ( () => console.log('waiting 600ms'))

```

*** Composição de funções ***
>>> Um encadeamento de funções
- Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função e assim sucessivamente

```js
//arquivo composicaoFunct.js
```
