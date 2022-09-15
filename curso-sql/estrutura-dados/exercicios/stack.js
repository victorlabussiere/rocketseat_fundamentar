class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top <0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top-- 
        return poppedTop
    }

    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

// passo 2: Utilizando
const stack = new Stack()

// adicionando dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'), '<- elemento adicionado ao array dados no objeto Stack')
console.log(stack.peek(), 'Elemento espiado com o uso da função peek().')

//remover elemento
stack.pop()
console.log(stack, 'elemento após o uso da função pop() ter retirado o primeiro elemento da pilha')
