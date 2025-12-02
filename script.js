const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnEquals = document.querySelector("#btn-equals");

const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");



/* function operate (){ 

console.log(operator);
}  */


let number1 = "default";

let operator = "";

let number2 = "";


btnPlus.addEventListener("click",function enterPlus () {
    console.log("+")
    operator = "+";
    //operate();
});

btnMinus.addEventListener("click",function enterMinus () {
    console.log("-")
    operator = "-";
    //operate();
});

btnOne.addEventListener("click",function enterOne () {
    
    if (number1 === "default"){
        number1 = "1"
        console.log("number1 = 1")
    } else {
    number2 = "1";
    console.log("number2 = 1")
    //operate();
    }
});

btnTwo.addEventListener("click",function enterTwo () {
    //console.log("+")
    if (number1 === "default"){
        number1 = "2"
        console.log("number1 = 2")
    } else {
    number2 = "2";
    console.log("number2 = 2")
    //operate();
    }
});

btnEquals.addEventListener("click",operate);




//console.log(operator);


function operate (){ 

    const a = Number(number1);
const b = Number(number2);
let result = "";

if (operator === "+") {
    result =  a + b;
} else if (operator === "-") {
    result = a - b;
}

console.log(result)
} 


//btnMinus.addEventListener("click", (operator = "-"))



//console.log(operator);

//} 