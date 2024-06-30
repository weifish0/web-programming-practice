let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

runningApp = true;
attempts = 0;


while(runningApp){
    // let guess = Number(window.prompt(`guess a integer number between ${minNum} to ${maxNum}`));
    let guess = window.prompt(`guess a integer number between ${minNum} to ${maxNum}`);

    if(guess == "q"){
        break;
    }

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a number between ${minNum} to ${maxNum}`);
    }
    else{
        attempts++;
        if(guess > answer){
            window.alert(`too high, try again`);
        }
        else if(guess < answer){
            window.alert(`too low, try again`);
        }
        else{
            window.alert(`congrats the correct anser is ${answer}. It took you ${attempts} attempts.`);
            runningApp = false;
        }
    }
}
