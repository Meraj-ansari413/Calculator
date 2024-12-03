// let btn=document.createElement("button");
// btn.innerText="click Me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector("body").prepend(btn);

// let bt=document.getElementById("btn");
// let bo=document.querySelector("body");
// addEventListener("click",function(){
//     bo.style.backgroundColor="black";
// })
let inputbox=document.getElementById("inputbox");


function insertvalue(value){
    inputbox.value+=value;
}

function clearscreen() {
    inputbox.value = "";
}


function calculate() {
    try {
        inputbox.value = eval(inputbox.value);
    } catch (error) {
        alert("Invalid Expression");
    }
}