let displayVal = '';
let btn = document.querySelector('.button');
let numBtns = document.querySelector('.numBtns');
let display = document.querySelector('.display');


numBtns.addEventListener('click', event => {
  let closestBtn = event.target.closest("button");
  if (!closestBtn || !numBtns.contains(closestBtn)) {
      return;
    }
  let btnVal = closestBtn.textContent;
  displayVal += btnVal;
  display.textContent = displayVal
  return;
})

let firstInputFunc = function(displayVal) {
    let displayValArray = displayVal.split(/\x|\+|\-|\÷/);
    return displayValArray[0];
};
let secondInputFunc = function(displayVal) {
    let displayValArray = displayVal.split(/\x|\+|\-|\÷/);
    return displayValArray[1];
};
let operatorFunc = function(displayVal) {
    if (displayVal.indexOf('+') !== -1) {
        return '+';
    } else if (displayVal.indexOf('-') !== -1) {
        return '-';
    } else if (displayVal.indexOf('÷') !== -1) {
        return '÷';
    } else if (displayVal.indexOf('x') !== -1) {
        return 'x';
    } else return 'ERROR';
}

let firstInput = firstInputFunc(displayVal);
let secondInput = secondInputFunc(displayVal);
let operator = operatorFunc(displayVal);


const sum = function (array) {
return array.reduce((firstInput, secondInput) => Number(firstInput) + Number(secondInput), 0);
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
    else if (operator === 'x') {
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
    let result = operate(firstInput, operator, secondInput);
    display.textContent = result;
    return;
})

