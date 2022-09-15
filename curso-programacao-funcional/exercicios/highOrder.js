// Exemplo com .map() JS
const numbers = [2, 4, 8, 16]

const square = n => n * n

const squaredNumber = numbers.map(square) // A função map, atrelada ao array, está recebendo outra função como parâmetro. Neste caso, mapeará os elementos da array e, ao mesmo tempo, entrega os elementos mapeados como argumentos para a função square.
console.log(squaredNumber);

// Exempplo de um retorno de função (currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)
            // inicio da primeira função
                // o retorno da primeira função é outra função ( fn )
                
pause(2000) ( () => console.log('waited 2s'))
                // o retorno da primeira função é outra função ( fn ) que nesse caso recebeu outra função 