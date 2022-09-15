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
console.log(allen.tipo) // Método "get tipo()" precisa ser implementado