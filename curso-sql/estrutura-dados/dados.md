Fundamentos de estrutura de dados;

* Por que estudar estrutura de dados? 
- organizar os dados da aplicação
- entender estruturas para melhor tomada de decisão 
- escrever melhores algoritimos 
- eficiência 
- algumas empresas usam como requisito

* Alguns desafios diários de uso de dados são:
- entendimento de como estao nossos dados
- criar listas
- repetição ou nao dos dados dentro da estrutura
- organizar os dados pelo par identificador + valor '{ valor }'

* O que é estrutura de dados?
- Uma maneira de organizar eordenar informações como textos, números, booleanos, etc e registrá-los na memória do computador.
-- precisamos organizar os dados (informações)
    -> textos, números, booleanos...
-- como estão registrados na memória
Exemplo: 

```js
    [1, 2, 3] // Array:
    {name: 'fulano', idade: 20} // Object:
```

* Gerenciando dados
- Estrutura de dados tem a ver com a gestão de informações da aplicação

Para esse gerenciamento, podemos dividir em 3 etapas>
1- Modelar a estrutura;
2- Dar vida à estrutura (instanciar essa estrutura);
3- Criar as funcionalidades dessa estrutura
Exemplo: Inserir, excluir, buscar, exibir, contar...

* Arrays:
- Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.
- Uma das estruturas mais básicas, simples de criar e utilizar.

```js
    ['a', 10, 'd', true] // total de 4 elmentos
```
* Características: 
- Acesso pelo index;
- Respeita a ordem  de inserção dos elementos;
- Aceita valores duplicados;
- Dependendo do tamanho do Arrays, para encontrar e/ou deletar um elemento, será necessário maior uso de performance.

* Arrays no JavaScript
- São dinâmicos;
- Você poderá ter dados de diferentes tipos misturados dentro de um Array:
--> Strings, Numbers, booleans, objects...
- Existem muitos métodos já implementados
```js
    push(), pop(), find(), filter() // entre outros
    // push = adiciona elemento, pop = retira elemento, find = procura elemento, filter = filtra tipo de elemento
```

* Array no código:
```js
// arquivo pilotos.js:
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']
// a indexação (index) começa pelo número 0
console.log(pilotos[0]) //Senna
console.log(pilotos[3]) //Hamilton

// acessar o tamanhjo do array
console.log(pilotos.length) // 4

// iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

//adicionar elementos
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna') // função anônima que recebe 'piloto' como parâmetro e procura, em todos os elementos, o resultado indicado. (piloto === 'Senna')
console.log(senna) // se verdadeiro, retorna o nome do piloto.

//deletar um elemento
pilotos.splice(1, 1) // indica uma posição dentro do array no primeiro argumento, o segundo argumento se refere a quantidade de elementos que serão retirados a partir da posição.
console.log(piloto)
```

* Matrix
- Matriz ou Vetor multidimensional.

- Significa que é um array dentro de um outro array
-- Poderemos ter muitos níveis.

```js

//arquivo studens.js
const students = [
    ['Joseph', 23, 'MG'], 
    ['Briana', 22, 'SP'], 
    ['Priscila', 23, 'PR']
    ]

console.log(students) // retorna o array parent
console.log(students [0]) // retorna o primeiro array
console.log(students [0][1]) // A segunda numeração indica um elemento, dentro do primeiro elemento, a ser retornado no console

```

* Stack
- Tradução de Stack é pilha.
- Como uma pilha de livros.

--> Linear, um após o outro
--> O último a entrar na pilha é o primeiro a sair.

* Conceito LIFO
- Last In First Out
--> O último elemento a entrar na pilha fica no topo. => push()
--> Esse elemento no topo é o primeiro a sair. => pop()

* Stack no código:
- push() -> adiciona um elemento à pilha
- pop() -> remove o elemento no topo da pilha
- peek() -> obtém o elemento do topo da pilha -> peek = espiar

--> Outros métodos poderão ser implementados como o size() para mostrar o tamanho da pilha.

```js
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top <0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top-- 
        return poppedTop
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// passo 2: Utilizando
const stack = new Stack()

// adicionando dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'), 'elementos adicionados ao stack')
console.log(stack.peek(), 'função peek espiando o primeiro elemento do array')

//remover
stack.pop()
console.log(stack, 'elemento após o uso da função pop() ter retirado o primeiro elemento da pilha')
```

* Queue
- Tradução de queue é fila

Como uma fila em uma loja ou restaurante
- Linear
- O primeiro a entrar na fila é o primeiro a sair 

Conceito FIFO
- Front (frente) é a referência do primeiro elemento a entrar na fila
- Back (fundo) é a referência do último elemento a entrar na fila 

Enqueue -> está entrando na fila -> entra pelo back
Dequeue -> está saindo da fila -> sairá pelo front

* Implementando Queue no código
- Métodos fundamentais:
-- enqueue(): adicionar elemento ao final da fila
-- dequeue(): remover o primeiro elemento a entrar na fila

Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros.

```js
// arquivo queue.js
// passo 1: modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue(item) {
        let item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}
// passo 2: utilizando  

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()

```
* Visão geral do curso
- Usamos ED para gerencia os dados das informações da nossa aplicação 
- Organizar, ordenar, buscar, são algumas funcionalidades básicas
- melhorar a escrita de algorítimos
- melhorar a eficiência dos nossos aplicativos
- Existem muitas estruturas a serem estudadas

Estrutura de dados poderá ser um assunto um pouco desafiador, especialmente para quem está no começo, mas como qualquer outra habilidade, como o passar do tempo e prática diária, através de desafios da carreira, podemos entender cada vez melhor.