console.log('01)', '1' == 1)

// === é estritamente igual
console.log('02)', '1' === 1) // false  
console.log('03)', 1 === 1) // true 

console.log('04)', '3' != 3)

// !== é estritamente diferente
console.log('05)', '3' !== 3)

console.log('06)', 3 < 2)
console.log('07)', 3 > 2)
console.log('08)', 3 <= 2)
console.log('09)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('10)', d1 === d2) // false pq está comparando endereços de memória
console.log('11)', d1 == d2) // false
console.log('12)', d1.getTime() === d2.getTime()) // true

console.log('13)', undefined == null) // true
console.log('14)', undefined === null) // false
