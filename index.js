
let num1 = 8;
let num2 = 2;
let resultNumbers = document.getElementById("result-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;


function add(){
    resultNumbers.textContent = "Result : "
    resultNumbers.textContent += num1 + num2;
}

function substract(){
    resultNumbers.textContent = "Result : "
    resultNumbers.textContent += num1 - num2;
}

function divide(){
    resultNumbers.textContent = "Result : "
    resultNumbers.textContent += num1 / num2;
}

function multiply(){
    resultNumbers.textContent = "Result : "
    resultNumbers.textContent += num1 * num2;
}