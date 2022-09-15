const sayMyName = () => console.log('Rodando sayMyName como argumento first-class') // Função base
const runFunction = fn => fn()           // Função que roda outras funções (função referência) --> Aqui ela recebe uma função e a invoca

runFunction(sayMyName) // --> pode apenas executar a função com suas propriedades
runFunction(() => console.log('Rodando arrow function como first class')) // apenas executando uma função arrow em seu parâmetro
console.log(runFunction(Math.random))
