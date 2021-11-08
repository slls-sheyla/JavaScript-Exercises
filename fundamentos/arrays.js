const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10
valores[10] = 15 //de 5 até 9 tem itens vazios
console.log(valores)
console.log(valores.length)

//inserir elementos no array
valores.push({id: 3}, false, null, 'teste') //Não é boa prática mas javascript permite misturar tipos de dados diferentes no array
console.log(valores)

//remover elementos do array
console.log(valores.pop)
delete valores[0]
console.log(valores)

console.log(typeof valores)
