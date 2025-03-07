console.log('test')

let calculator = document.getElementById('calculator');
let display = document.getElementById('display');

display.innerHTML = "0"
display.value= ''


let currentInput = '';
let operator = '';
let previousInput = '';

calculator.addEventListener('click', function (event) {
// console.log(event.target.tagName)

    if (event.target.tagName === "BUTTON"  || event.target.tagName=="IMG") {
        let buttonTarget = event.target;

        if (buttonTarget.value === "Clear"  || buttonTarget.tagName=="IMG") {
            display.innerHTML = '0'
            display.value= ''
            currentInput = '';
            operator = '';
            previousInput = '';
        } else {
            if (['+', '-', '*', '/'].includes(buttonTarget.value)) {
                    operator = buttonTarget.value;
                    console.log("operator " + operator)
                } else{
                    
                }
                display.value += buttonTarget.value;
                display.innerHTML = display.value;
                console.log(display.value)
        }
        
        // if (['+', '-', '*', '/'].includes(buttonTarget.value)) {
        //     operator = buttonTarget.value;
        //     console.log("operator " + operator)
        //     display.value +=buttonTarget.
        // }
        // if (buttonTarget.value == "="){
        //     if(currentInput && previousInput && operator)
        // }
        


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