function sum (a: number, b: number): number {
  return a + b
}

console.log(sum(2, 3))

type operationFunction = (a: number, b: number) => number
function operation (fn: operationFunction, a: number, b: number): number {
  return fn(a, b)
}

console.log(operation(sum, 5, 6))

const a = (): void => { console.log('something') }

a()

console.log(operation((a, b) => a + b, 5, 5))
