//hoisting = mover as declarações para o topo

console.log('a = ', a) //undefined
var a = 2
console.log('a = ', a)

//console.log('b = ', b) //o efeito de hoisting não ocorre quando usamos a variável let
let b = 2
console.log('b = ', b)
