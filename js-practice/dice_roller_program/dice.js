function rollDice(){
    const diceTimes = document.getElementById("diceTimes");
    const diceNumList = document.getElementById("diceNumList");
    const alertMessage = document.getElementById("alertMessage");
    const diceNumPic = document.getElementById("diceNumPic");
    let diceTimesValue = Number(diceTimes.value);
    let diceNums = [];
    let images = [];

    if(diceTimesValue > 0){
        alertMessage.textContent = "";
        for(let i = 0; i < diceTimesValue; i++){
            let diceNum = Math.floor(Math.random() * 6) + 1;
            diceNums.push(diceNum);
            images.push(`<img src="./img/Dice-${diceNum}.png" alt="Dice-${diceNum}">`);
        }
        
        diceNumList.textContent = `dice: ${diceNums.join(", ")}`;
        diceNumPic.innerHTML = images.join("");
    }
    else{
        alertMessage.textContent = "dice times should greater than 0";
    }
    
}