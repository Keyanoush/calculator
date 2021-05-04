import { addTheNumbers } from "./add.js"
import { subtractTheNumbers } from "./subtract.js"
import { multiplyTheNumbers } from "./multiply.js"
import { divideTheNumbers } from "./divide.js"

const buttonContainer = document.querySelector("#buttons")
const answerContainer = document.querySelector("#answer")


buttonContainer.innerHTML = `
<button id="add">Add</button>
<button id="subtract">Subtract</button>
<button id="multiply">Multiply</button>
<button id="divide">Divide</button>
`
const addButton = document.querySelector("#add")
const subButton = document.querySelector("#subtract")
const mulButton = document.querySelector("#multiply")
const divButton = document.querySelector("#divide")

addButton.addEventListener("click", () => {
    const sum = addTheNumbers(376, 887)
    answerContainer.innerHtml = sum
})

subButton.addEventListener("click", () => {
    const difference = subtractTheNumbers(376, 887)
    answerContainer.innerHtml = difference
})

mulButton.addEventListener("click", () => {
    const product = multiplyTheNumbers(376, 887)
    answerContainer.innerHtml = product
})

divButton.addEventListener("click", () => {
    const quotient = divideTheNumbers(376, 887)
    answerContainer.innerHtml = quotient
})

