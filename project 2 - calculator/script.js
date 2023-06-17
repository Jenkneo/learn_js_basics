"use strict";

let numbers = document.querySelectorAll('.number'),
    input = document.querySelector('.calc-typed'),
    operatorsButtons = document.querySelectorAll('.l'),
    clear = document.getElementById('clear'),
    del = document.getElementById('del'),
    equal = document.getElementById('equal'),
    oldCalcs = document.querySelector('.calc-operation'),
    operators = ['+', '-', '/', 'x']

let calc = function (){
    oldCalcs.textContent = input.textContent
    input.textContent = eval(input.textContent)

}

equal.addEventListener("click", calc);

for (let i = 0; i < operatorsButtons.length; i++) {
    operatorsButtons[i].addEventListener("click", function() {
        let operator = operatorsButtons[i].textContent
        let find = -1

        for (let a = 0; a < operators.length; a++){
            find = input.textContent.indexOf(operators[a])
            if (find != -1) {
                break;
            }
        }

        if (find == -1){
            input.textContent += operator
        }
        else {
            calc()
        }
    });
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        let number = numbers[i].textContent
        if (input.textContent == 0){
            input.textContent = number;
        }
        else {
            input.textContent += number;
        }
    });
}
del.addEventListener("click", function () {
    input.textContent = input.textContent.slice(0, -1)
    if (input.textContent == ''){
        input.textContent = '0';
        oldCalcs.textContent = '0';
    }
});
clear.addEventListener("click", function () {
    input.textContent = '0';
    oldCalcs.textContent = '0';
});
