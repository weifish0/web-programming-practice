const generateBtn = document.getElementById("generateBtn");
const randomNum1 = document.getElementById("randomNum1");
const randomNum2 = document.getElementById("randomNum2");
const randomNum3 = document.getElementById("randomNum3");
let num;
let min = 0;
let max = 10;

generateBtn.onclick = function(){
    num = Math.floor(Math.random() * max)+ min;
    randomNum1.textContent = num;
    num = Math.floor(Math.random() * max)+min;
    randomNum2.textContent = num;
    num = Math.floor(Math.random() * max)+min;
    randomNum3.textContent = num;
}