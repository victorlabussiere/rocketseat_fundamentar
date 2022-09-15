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
