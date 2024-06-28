// 24.06.21(Fri)

let stName = "恍恍惚惚忽●得鮪魚肚子●餓了哈哈";
// let stAge = window.prompt("你幾歲?");
let stStatus = true;

// window.alert("一個前端廢物努力練習JS的第0天");


document.getElementById("ageSubmit").onclick = function(){
    let stAge = document.getElementById("ageInput").value;
    document.getElementById("stAge").textContent = `age: ${stAge}`;    
}

document.getElementById("stName").textContent = `name: ${stName}`;
document.getElementById("stStatus").textContent = `sstatus: ${stStatus}`;

let a = 5;
switch(a){
    case 1:
        console.log("1");
    case 2:
        console.log("1");
    case 3:
        console.log("1");
    case 4:
        console.log("1");
    case 5:
        console.log("5");
}


// 24.06.22