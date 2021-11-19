console.log(typeof console)
console.log(Math.ceil(6.1)) // arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // as duas notações são válidas
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
