// Arrays

// const fruits = ['Avocado', 'Orange', 'Banana'] // inferido

const fruits: string[] = ['Avocado', 'Orange', 'Banana'] // explícito

// definindo dois tipos para um array

const arr: [string, boolean] = ['Pedro', true]
const arr2: (string | number | boolean )[] = ['Pedro', 44, 'Lá ele', true]

const arr3: any = [2336, 'sfbsibs', {}, [], true, undefined]

console.log(fruits)
console.log(arr)
console.log(arr2)

console.log(typeof arr3)

console.log(arr[0].toUpperCase())
console.log(arr[1])
