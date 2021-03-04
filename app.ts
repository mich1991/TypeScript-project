const button = document.querySelector('button')
const input1 = document.querySelector('.num1')! as HTMLInputElement
const input2 = document.querySelector('.num2')! as HTMLInputElement

const add = (num1: number, num2: number) => {
    return num1 + num2
}

button.addEventListener('click', (e) => {
    console.log(add(+input1.value, +input2.value))
})