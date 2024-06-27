// 24.06.21(Fri)

let stName = "恍恍惚惚忽●得鮪魚肚子●餓了哈哈";
// let stAge = window.prompt("你幾歲?");
let stStatus = true;

// window.alert("一個前端廢物努力練習JS的第0天");
// console.log(`${stName}是不是超級大帥哥:\n\t${typeof stStatus}值為 ${stStatus}`);


document.getElementById("ageSubmit").onclick = function(){
    let stAge = document.getElementById("ageInput").value;
    document.getElementById("stAge").textContent = `age: ${stAge}`;    
}

document.getElementById("stName").textContent = `name: ${stName}`;
document.getElementById("stStatus").textContent = `sstatus: ${stStatus}`;

let x = Math.random();
console.log(Math.floor(x));


// 24.06.22