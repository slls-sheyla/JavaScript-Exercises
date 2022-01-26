const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Versatappen') //adiciona um novo elemento na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir do índice 3 remover 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // pega os elementos a partir do indice 2
console.log(algunsPilotos1)

/*
 pega os elementos a partir do índice 1 até o índice 4
 sem incluir o índice 4
 */
const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)
