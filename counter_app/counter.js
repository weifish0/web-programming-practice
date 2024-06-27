var num = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtnBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countNum = document.getElementById("countNum");

increaseBtn.onclick = function(){
    num++;
    console.log("increaseBtn")
    countNum.textContent = num;
}

decreaseBtn.onclick = function(){
    num--;
    countNum.textContent = num;
}

resetBtn.onclick = function(){
    num = 0;
    countNum.textContent = num;
}