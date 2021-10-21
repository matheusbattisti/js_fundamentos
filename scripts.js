console.log('Olá!')

// console
console.error('Este é um erro!')
console.warn('Este é um aviso!')
console.log('Esta é uma mensagem!')

// variáveis
var x = 10
let y = 15
const z = 20

console.log(x)
console.log(y)
console.log(z)

// tipos de dados
const name = 'Matheus'
const shirtsQty = 4
const isApproved = false
let surname = null
let age
const languages = ['JavaScript', 'PHP', 'Python']
const user = { email: 'matheus@teste.com', password: 'teste123' }

console.log(name)
console.log(shirtsQty)
console.log(languages)

console.log(typeof name) // String
console.log(typeof surname) // Null
console.log(typeof user) // Object

// métodos de string
const fullName = 'Matheus Battisti'

console.log(fullName.length) // 16

const stringToArray = fullName.split(' ')

console.log(stringToArray) // ["Matheus", "Battisti"]

console.log(fullName.toLowerCase()) // matheus battisti

console.log(fullName.toUpperCase()) // MATHEUS BATTISTI

console.log(fullName.indexOf('Battisti')) // 8

console.log(fullName.slice(0, 7)) // Matheus

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length) // 5

console.log(list[2]) // c

list[5] = 'f'

console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

list.push('g')

console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log(list[list.length - 1]) // ultimo item - g

list.pop() // ['a', 'b', 'c', 'd', 'e', 'f']

list.shift()

console.log(list) //  ['b', 'c', 'd', 'e', 'f']

list.unshift('a')

console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

// objetos
const product = {
  name: 'Camisa',
  price: 15.99,
  inStock: true,
  sizes: ['P', 'M', 'G'],
}

console.log(product.name) // Camisa

product.color = 'Azul' // Adicionando propriedade

console.log(product)

const { price, inStock } = product // destructuring

console.log(price)

// JSON
const dog = {
  name: 'Shark',
  age: 10,
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj)

// Estruturas condiconais
const a = 10

if (a > 8) {
  console.log('A é maior que 8!')
}

const b = 'Matheus'

if (b === 'João') {
  console.log('O nome é João!')
} else if (b === 'Pedro') {
  console.log('O nome é Pedro!')
} else {
  console.log('Não encontramos o nome do usuário!')
}

const someNumber = 14

let testingANumber = someNumber < 20 ? 'Yes' : 'No'

console.log(testingANumber) // No

// Estruturas de repetição
const myList = [1, 2, 3, 4, 5]
let counter = 0

while (counter < myList.length) {
  console.log('Imprimindo: ' + myList[counter])
  counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < mySecondList.length; counter++) {
  console.log('Imprimindo: ' + mySecondList[counter])
}

// array methods
const names = ['Matheus', 'João', 'Pedro', 'Maria']

names.forEach(function (name) {
  console.log(`O nome é: ${name}`)
})

const modifiedNames = names.map(function (name) {
  if (name === 'Matheus') {
    return (name = 'Sr. Matheus')
  } else {
    return name
  }
})

console.log(modifiedNames)

const bigNumbers = [1, 2, 3, 10, 50].filter((number) => {
  return number > 5
})

console.log(bigNumbers) // [10, 50]

const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
  return total + number
})

console.log(sumAll) // 150

// Funções
function minhaFuncao() {
  console.log('Olá função!')
}

minhaFuncao()

function nomeCompleto(nome, sobrenome) {
  return `Olá ${nome} ${sobrenome}, como vai?`
}

const saudacao = nomeCompleto('Matheus', 'Battisti')

console.log(saudacao)

const myArrowFunction = (a, b) => {
  return a + b
}

console.log(myArrowFunction(2, 2))

const mySimpleArrow = (a, b) => a + b

console.log(mySimpleArrow(5, 5))

// classes
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productDetails() {
    return `O nome do produto é: ${this.name} e ele custa RS${this.price}`
  }
}

const socks = new Product('Meia branca', 5.99)

console.log(socks.productDetails())

// DOM
const title = document.getElementById('title')
const sameTitle = document.querySelector('#title')

const texts = document.querySelectorAll('.text')

texts.forEach((text) => {
  console.log(text.textContent.toUpperCase())
})

// manipulação de elementos
title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

texts[1].style.backgroundColor = 'red'

texts[2].classList.add('my-class')

texts[3].remove()

// eventos
btn.addEventListener('click', function () {
  console.log('clicou!')
})
