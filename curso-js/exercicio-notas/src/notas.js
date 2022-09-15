function ativar() {

    var areaResultado = document.querySelector('div.grade-container')
    var input = document.getElementById('inputNota')
    var nota = Number(input.value)
    areaResultado.style.color = 'initial'
    areaResultado.innerHTML = ''

    function retornaNota() {
        if (nota == 100) {
            areaResultado.style.color = 'green'
            return areaResultado.innerHTML += 'Nota: A+'
        } else if (nota >= 90) {
            areaResultado.style.color = 'green'
            return areaResultado.innerHTML += 'Nota: A'
        } else if (nota >= 80) {
            areaResultado.style.color = 'blue'
            return areaResultado.innerHTML += 'Nota: B'
        } else if (nota >= 70) {
            areaResultado.style.color = 'blue'
            return areaResultado.innerHTML += 'Nota: C'
        } else if (nota >= 60) {
            areaResultado.style.color = 'orange'
            return areaResultado.innerHTML += 'Nota: D'
        } else if (nota <= 59) {
            areaResultado.style.color = 'red'
            return areaResultado.innerHTML += 'Nota: F'
        }
    }

    var calculaNota = nota >= 0 && nota <= 100 ? retornaNota() : areaResultado.innerHTML += `<p>O valor máximo permitido é 100</p>`
    return calculaNota;
}