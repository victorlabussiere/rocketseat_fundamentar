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
console.log(pilotos)
