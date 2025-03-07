console.log('test')

let calculator = document.getElementById('calculator');
let display = document.getElementById('display');

display.innerHTML = "0"
display.value= ' '


let currentInput = '';
let operator = '';
let previousInput = '';

calculator.addEventListener('click', function (event) {
// console.log(event.target.tagName)

    if (event.target.tagName === "BUTTON"  || event.target.tagName=="IMG") {

        if (event.target.value === "Clear"  || event.target.tagName=="IMG") {
            console.log(10)
            display.innerHTML = '0'
            currentInput = '';
            operator = '';
            previousInput = '';
        } else {
            display.value += event.target.value;
            display.innerHTML = display.value
        }
        if (event.target.value === "="){

        }


    }

    // if (event.target.tagName === "Clear") {
    //     display.value = '0'
    //     display.innerHTML = display.value
    //     currentInput = '';
    //     operator = '';
    //     previousInput = '';
    // }
    //     if (event.target.tagName === '=') {
    //         if (currentInput && previousInput && operator) {
    //             currentInput = calculate(previousInput, currentInput, operator);
    //             display.value = currentInput;
    //             display.innerText = currentInput;
    //             console.log(currentInput)
    //             previousInput = '';
    //             operator = '';
    //         }
    //     }



})

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
}    