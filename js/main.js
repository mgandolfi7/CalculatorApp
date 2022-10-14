document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#addition').addEventListener('click', addition)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#subtraction').addEventListener('click', subtraction)

let firstNum = 0;
let secondNum = 0;
let opperand = ''

let calculator = {
    waitingForSecondValue: false,
}

function seven() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 7
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 7
    }
} function eight() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 8
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 8
    }
}

function nine() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 9
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 9
    }
}

function four() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 4
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 4
    }
}

function five() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 5
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 5
    }
}

function six() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 6
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 6
    }
}

function one() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 1
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 1
    }
}

function two() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 2
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 2
    }
}

function three() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 3
    } else if (calculator.waitingForSecondValue === true) {
        secondNum = document.querySelector('input').value += 3
    }
}

function zero() {
    if (calculator.waitingForSecondValue === false) {
        firstNum = document.querySelector('input').value += 0
    } else if (calculator.waitingForSecondValue === true) {

        secondNum = document.querySelector('input').value += 0 
    }
}

function divide() {
    calculator.waitingForSecondValue = true;
    document.querySelector('input').value = ""
    opperand = '/'
}

function multiply() {
    calculator.waitingForSecondValue = true;
    document.querySelector('input').value = ""
    opperand = '*'
}

function addition() {
    calculator.waitingForSecondValue = true;
    document.querySelector('input').value = ""
    opperand = '+'
}

function subtraction() {
    calculator.waitingForSecondValue = true;
    document.querySelector('input').value = ""
    opperand = '-'
}

function clear() {
    calculator.waitingForSecondValue = false;
    document.querySelector('input').value = ""

}

function equals() {
    if (opperand === '/') {
        document.querySelector('input').value = +firstNum / +secondNum
    } else if (opperand === '*') {
        document.querySelector('input').value = +firstNum * +secondNum        
    } else if (opperand === '+') {
        document.querySelector('input').value = +firstNum + +secondNum
    } else if (opperand === '-') {
        document.querySelector('input').value = +firstNum - +secondNum
    }
}