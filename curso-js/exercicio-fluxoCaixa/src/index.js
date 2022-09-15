// ### DECLARANDO VARIAVEIS-------------------------------------------------------------------------
var receitas = [];
var despesas = [];
// -inputs e outputs
var inputReceitas = document.getElementById('input-entrada')
var inputDespesas = document.getElementById('input-saida'); //inputs
var exibeReceitas = document.getElementById('output-entradas')
var exibeSaidas = document.getElementById('output-saidas')
var exibeLiquidez = document.getElementById('output-vendasLiquidas')//outputs
// ### DECLARANDO FUNÇÕES---------------------------------------------------------------------------
function soma(lista) {//função que soma valores de uma lista
    let soma = 0
    for (let value of lista) {
        soma += value
    }
    return soma
}
function adicionarValor(valor, lista, exibe) {//função que adiciona valores à uma lista e soma
    valor = Number(valor.value);
    lista.push(valor)
    return exibe.value = `R$ ${soma(lista)}`
}
function calcularCaixa(lista1, lista2, exibe) {//função que calcula a diferença entre as listas
    let liquidez = soma(lista1) - soma(lista2);
    let valorNegativo = liquidez < 0
    valorNegativo == true ? exibe.style.color = 'red' : exibe.style.color = 'green';
    return exibe.value = `R$ ${liquidez}`
}   
// ### INVOCANDO FUNÇÕES----------------------------------------------------------------------------
var botaoReceita = document.getElementById('button-receita')
botaoReceita.addEventListener('click', () => {
    adicionarValor(inputReceitas, receitas, exibeReceitas)
})
var botaoDespesa = document.getElementById('button-despesa')
botaoDespesa.addEventListener('click', () => {
    adicionarValor(inputDespesas, despesas, exibeSaidas)
})
var botaoCalcula = document.getElementById('button-calcula')
botaoCalcula.addEventListener('click', () => {
    calcularCaixa(receitas, despesas, exibeLiquidez)
})
var botaoReseta = document.getElementById('button-reset') 
botaoReseta.addEventListener('click', () => {
    window.location.reload()
})