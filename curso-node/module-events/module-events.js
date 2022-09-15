//EventEmitter = modulo de eventos com node. -----------------
const { EventEmitter } = require('events')
const ev = new EventEmitter()

//ev.on('evento', () => {'função à ser ouvida.'}) === cria um evento mas nao propaga
ev.on('newEvent', (message) => {
    console.log(`Olá ${message}!`)
})

//ev.emmit('emitir eventos') === propaga o evento.
ev.emit('newEvent', "Victor")

//.once === irá ouvir o evento apenas uma única vez]
ev.once('noRepeat', (message) => {
    console.log(`Olá ${message}!`)
})

// é utilizado no lugar do '.on'
ev.emit('noRepeat', "Mundo") //executado
ev.emit('noRepeat', "Mundo") //ignorado
ev.emit('noRepeat', "Mundo") //ignorado
ev.emit('noRepeat', "Mundo") //ignorado


// ------------- aplicando heranças com eventEmitter ----------------------
// É possível fazer com que um objeto here a habilidade de emitir um evento como o EventEmitter
const { inherits } = require('util') //invocamos a função que permite executar a herança

// função construtora de objetos
function Character(name) {
    this.name = name
}
// passamos o EventEmitter para a função construtora como herança com o inherits
inherits(Character, EventEmitter)

// Ao criarmos o objeto, ele já terá herdado o EventEmitter
const chapolin = new Character('Chapolin')

// Entao, invocamos as propriedades do EventEmitter a partir do novo objeto.
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} Colorado!`)) // o objeto cria um evento como se fosse um EventEmitter
chapolin.emit('help') // e também propaga.

// desta forma, podemos criar um objeto com a habilidade de criar eventos característicos.
