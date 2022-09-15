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
