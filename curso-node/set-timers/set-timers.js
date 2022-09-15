//setTimeOut => cria um intervalo de tempo para acionar uma função callback
//clearTimeOut => cancelar a execução de um timeout
//setInterval => cria um padrão de repetição de função callback com um intervalo definidio.
//clearInterval => irá cancelar a execução do setInterval 


function gritaVasco() {
    console.log('Vasco da Gama')
}

let vasco = setInterval(gritaVasco, 1000);

setTimeout(() => {
    clearInterval(vasco)
}, 5000);