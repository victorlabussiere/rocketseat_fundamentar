# Curso de Programação Orientada a Objetos.

## O que é Programação Orientada a Objetos? --> POO
- Oriented Object Programming ou OOP;
- Um paradigma de desenvolvimento;
- Uma maneira de resolver um problema, um modo de pensar;
- Não está ligada somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares.

## Utilização prática no mercado:
- Está na maioria dos sitemas atuais;
- várias linguagens (JS, TS, JAVA, Python)
- Utilizado por analistas de sistemas e não somente por programadores
- - Na fase de levantamento de requisitos de sistemas;
- - Via gráficos, desenhos e textos.

## Onde e quando utilizar POO?
- Linguagens (dependendo da linguagem, ela é orientada a objetos e não tem como usar outro paradigma)
- Existem:
- - Orientadas a Objetos
- - Multi-Paradigmas -> Possibilidade de escolher entre ser orientada ou ser funcional
- - Funcional -> não é orientada a objetos.
- Quando quiser aplicações Padrões de Projetos
- Quando quiser organizar seu código
- Para melhorar o entendimento do código, pensando nele como objetos
- Quando preicsar fazer reuso de código
- Para separar a complexidade de código, abstrair código e expor de maneira simples
- Para classificar as rotinas e trechos de código.

## Conceitos
- Precisamos entender os conceitos eparadigma e não somente códigos; // base de comunicação entre desenvolvedores/ analistas etc
- Uma boa fundamentação

## Objetos
* Todo objeto possui
- Propriedaes e Funcionalidades
- Estados e Comportamentos
- Atributos e Métodos

## Abstratos vs Mundo Real
- Trazemos a representação de algo do mundo real para Objetos
- - Pessoa
- - Aluno
- - Produto
- - Carrinho de compras

- Porém, alguns objetos na progração não são fáceis de identificar, posi são abstratos como, por exemplo:
- - Autenticação
- - Autorização

! Nem todo objeto do mundo real fara parte do seu sistema.

## Classes
* As classes, na orientação a objeto, funcionam como um molde para os objetos. Os Objetos são criados a partir de uma classe e, muitos deles, podem ser feitos da mesma classe.

- Exemplo: Máquina de biscoito:
- - Instâncias -> Biscoito.
- - - Nesse caso, a classe é a máquina de biscoitos, ela retorna biscoitos através de suas funções/métodos.

* Classes em JavaScript
- Syntactical sugar -> o objeto irá herdar métodos a partir das próprias características.
- Prototype -> esses métodos são herdados porquê todos os objetos criados em JS são protótipos. Isso é, por padrão, já possuem métodos atribuídos previamente de acordo com seu tipo (Number, String, Array...).

## Encapsulamento
Dirigir um carro != Conhecer o motor do carro.

- Colocar numa capsula.
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos.

- - Comparação com ligar um carro vs conhecer o funcionamento do carro

girar a chave do carro seria uma função que executa todas as etapas necessárias para dar a partida.
```js

function ligarCarro() {
    girarChave()
    ligarMotor()
    darPartida()
    ...etc
}
```
## Entendendo Encapsulamento com JavaScript
Existem maneiras diferentes de digitar um código

```js
// arquivo POO.js
//estrutural
let altura = 50
let largura = 60

function calcularArea () {
    return altura * largura
}

let area = calcularArea()
/*
Desta forma, nem sempre o código será reutilizável, pois a estrutura nao tem flexibildiade e sempre irá retornar 50 * 60
*/

// Orientado a Objetos
// primeiro passo: modelando o objeto
class Poligono {
    constructor (altura, largura) {
         this.altura = altura
         this.largura = largura
    }

    get area() {
        return this.#calcularArea() // o # dentro de um objeto determina que essa função não terá acessibilidade fora do objeto.
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

// segundo passo: utilizando o objeto
let poligono = new Poligono(50, 60) // desta forma, é possível criar vários objetos com argumentos diferentes na mesma classe polígono
let poligono2 = new Poligono(10, 30)
let poligono3 = new Poligono(30, 30)


console.log(poligono.area, '-> poligono.area retorna a function area')
console.log(poligono, '-> poligono retorna os atributos dentro do objeto')
console.log(poligono2.area, '-> poligono.area retorna a function area')
console.log(poligono, '-> poligono retorna os atributos dentro do objeto')
console.log(poligono3.area, '-> poligono.area retorna a function area')
console.log(poligono, '-> poligono retorna os atributos dentro do objeto')

```

## Confusão e Solução 
Programação Estruturada x Orientada a Objetos

* Programação Estruturada
- Processa a entrada e manipulação dos dados, até a saída
- Uso de sequências, estruturas de repetição e condições
- Uso de uma rotina maior, ou sub-rotinas

* Programação Orientada a Objetos
- Surge para trazer um cuidado ao uso estruturado
-- Não elimina por completo o uso estruturado
- Conceitos como Objetos e Classes (encapsulamento)
- Mwelhor reuso de código (Herança)

Exemplos 
```js

// estruturando 
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado) 

//POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)

// Na maneira POO, a formatação se torna mais regrada pois há uma estrutura por trás que define previamente os atributos e métodos dos objetos que são reutilizados sempre que necessário.
```
## Herança
- Pais e Filhos
- Objetos podem herdar, ou estender, características bases
- Uma cópia de atributos e métodos de outra classe

* Exemplo
```js

class Veiculo {
    rodas = 4
    mover(direcao) { }
    virar(direcao){}
}

class Moto extends Veiculo { // extends é a expressão que diz que Moto é filho de Veiculo. ('extenção de')
    constructor() {
        super() // método que irá puxar atributos e métodos do pai
        this.rodas = 2
    }
}
```

! Saiba:
- Um objeto pode estender de outro objeto, que pode estender de outro objeto...
- Fácil reutilização de código.
- A herança por protótipo já existe por padrão.

## Polimorfismo
- Quando um objeto estende de outro (herança), tavez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto
- Recriaremos então um método (ou mais) da classe herdade

* Polimorfismo significa 'Muitas Formas'

* Exemplo
- classe Ave possui atributos como voar
    pato pode ser um objeto da classe ave e não possuir o atributo voar por longos períodos.
    já o objeto bem-te-vi da classe Ave pode voar por longos períodos.

## Entendendo Polimorfismo com JavaScript

```js
//arquivo atleta.js

// classe principal
class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria(peso) {
        if (this.peso <= 50) {
            return this.categoria = 'infantil'
        } else if (this.peso <= 65) {
            return this.categoria = 'juvenil'
        } else {
            return this.categoria = 'adulto'
        }
    }
}

// objeto da classe atleta
class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'leve'
        } else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } else {
            this.categoria = 'pesado'
        }
    }
}

const atleta = new Atleta(15)
atleta.definirCategoria()
console.log(atleta, 'objeto simples atleta. Sem herança')

const lutador = new Lutador(65)
lutador.definirCategoria()
console.log(lutador)

```
## Abstração 
Template ou Identidade de uma classe que será construida no futuro
- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS...
- A implementação dos métodos e atributos só poderão ser feitos na classe que irá herdar essa abstração.

```js
// arquivo abstracao.js
// conceito de abstração representado em JS
class Parafuso { // <--- Superclasse - Abstrata
    constructor() {
        if (this.constructor === Parafuso) {
            console.log('Classe abstrata não pode ser instanciada')
        }
    }

    get tipo() {
        console.log('Método "get tipo()" precisa ser implementado')
    }
}

console.log('Início das atribuições')

class Fenda extends Parafuso {
    constructor() { super() }
    get tipo() { return 'fenda' }
}

class Philips extends Parafuso {
    constructor() { super() }
    get tipo() { return 'philips' }
}

class Allen extends Parafuso { }

// criar e usar
new Parafuso() // 'Classe abstrata não pode ser instânciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo)
console.log(philips.tipo)
console.log(allen.tipo) // 'Método "get tipo() precisa ser implementado'

```

## Resumo de Programação Orientada a Objetos:
* É uma maneira de se interpretar um problema e aplicar no código.
- Se baseia em criar classes de objetos que podem ser reutilizadas ao longo do código
- A orientação à objetos tem princíos
- - Encapsulamento: esconder detalhes de implementação do mundo exterior.
- - Herança: Quando classes herdam atributos de classes parentes
- - Polimorfismo: Quando as classes herdeiras adaptam os atributos herdados
- - Abstração: Conceito de superclasse que explica como outras classes serão criadas a partir dela. A classe que será extendida à outras.
