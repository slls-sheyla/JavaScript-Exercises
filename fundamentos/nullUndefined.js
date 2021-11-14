let valor // não inicializada
console.log(valor) //undefined

// console.log(valor2) // is not defined

valor = null
console.log(valor) //inicializada como null

//console.log(valor.toString()) //Erro, tentou acessar algo que está nulo

const produto = {}
console.log(produto.preco) //undefined - porque o preço não está definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(produto)
console.log(!!produto.preco) //false

delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco) //false
console.log(produto)
