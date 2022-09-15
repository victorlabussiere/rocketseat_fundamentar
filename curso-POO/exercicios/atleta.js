class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria(peso) {
        if (this.peso <= 50) {
            return this.categoria = 'infantil'
        } else if (this.peso <= 65) {
            return this.categoria = 'juvenil'
        } else {
            return this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'leve'
        } else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } else {
            this.categoria = 'pesado'
        }
    }
}

const atleta = new Atleta(15)
atleta.definirCategoria()
console.log(atleta, 'objeto simples atleta. Sem herança')

const lutador = new Lutador(65)
lutador.definirCategoria()
console.log(lutador)