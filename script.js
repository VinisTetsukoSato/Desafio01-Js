let numberOne = prompt('Insira o primeiro número:')
let numberTwo = prompt('Insira o segundo número:')

firstNumber = Number(numberOne)
secondNumber = Number(numberTwo)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mut = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert(`O resultado final é: ${sum}`)
alert(`O resultado final é: ${sub}`)
alert(`O resultado final é: ${mut}`)
alert(`O resultado final é: ${div}`)
alert(`O resultado final é: ${rest}`)


if (sum % 2 === 0 ) {
    alert(`O número ${sum} é par`)
} else {
    alert(`O número ${sum} é impar`)
}

if (firstNumber === secondNumber) {
    alert('Os números inseridos são iguais!')
}else {
    alert('Os números inseridos são diferentes!')
}