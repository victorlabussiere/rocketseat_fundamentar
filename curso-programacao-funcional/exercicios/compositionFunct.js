const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWhitD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())
// primeiro a função filter retornará os dados desejados de a cordo com os parâmetros. no caso o retorno de outra função que filtra palavras que começam com D
// agora person = apenas as palavras com d e recebe a função .map, o retorno da função map será o retorno da função toUpperCase()
// foram instruidas 4 funções, encadeadas entre si, em apenas uma composição.

console.log(upperCasePeopleThatStartsWhitD)