// First Order
function sum (a, b) {
  return a + b
}
//  Higer Order
function operation (fn, a, b) {
  return fn(a, b)
}

console.log(operation(sum, 5, 6))

// Arrow
const a = () => console.log('something')
a()

console.log(operation((a, b) => a - b, 5, 5))
