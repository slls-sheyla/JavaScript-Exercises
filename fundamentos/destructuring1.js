// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//destructuring
const { nome, idade } = pessoa // tire de dentro do objeto pessoa o atributo nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // tire de dentro do objeto pessoa o atributo nome e idade e crie as variáveis n e i
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa //erro pq tá tentando acessar algo que não é objeto
//console.log(ag, num)
