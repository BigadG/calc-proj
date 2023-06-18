let displayVal = '';
let btn = document.querySelector('.button');
let numBtns = document.querySelector('.numBtns');
let display = document.querySelector('.display');

let firstInput;
let secondInput;
let operator;

numBtns.addEventListener('click', event => {
  let closestBtn = event.target.closest("button");
  if (!closestBtn || !numBtns.contains(closestBtn)) {
      return;
    }
  let btnVal = closestBtn.textContent;
  displayVal += btnVal + ' ';
  display.textContent = displayVal

  firstInput = displayVal.charAt(0);
  secondInput = displayVal.charAt(4);
  operator = displayVal.charAt(2);
  return;
})




  
  
const sum = function (array) {
return array.reduce((firstInput, secondInput) => firstInput + secondInput, 0);
};
  
const subtract = function (array) {
return array.reduce((firstInput, secondInput) => firstInput - secondInput);
};

const multiply = function (array) {
return array.length
    ? array.reduce((firstInput, secondInput) => firstInput * secondInput)
    : 0;
};

const divide = function (array) {
 return array.length
   ? array.reduce((firstInput, secondInput) => firstInput / secondInput)
   : 0;
};

function operate(firstInput, operator, secondInput) {
 array = [firstInput, secondInput];
    if (operator === '+') {
        return sum(array);
    }
    else if (operator === '-') {
        return subtract(array);
    }
    else if (operator === '*') {
        return multiply(array);
    }
    else if (operator === '÷') {
        return divide(array);
    } else {
        return "ERROR"
    }
};




let equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    let displayVal = operate(firstInput, operator, secondInput);
    return;
})

