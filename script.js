const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const btnEquals = document.querySelector("#btn-equals");

/* const btnZero = document.querySelector("#btn-zero");
const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");
const btnFour = document.querySelector("#btn-four");
const btnFive = document.querySelector("#btn-five");
const btnSix = document.querySelector("#btn-six");
const btnSeven = document.querySelector("#btn-seven");
const btnEight = document.querySelector("#btn-eight");
const btnNine = document.querySelector("#btn-nine"); */

const btnClear = document.querySelector("#btn-clear");

const display = document.querySelector("#display");

/* function operate (){ 

console.log(operator);
}  */


let number1 = "default";
let operator = "";
let number2 = "";
let total = "";
let result = "";


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

btnMultiply.addEventListener("click",function enterMultiply () {
    console.log("x")
    operator = "x";
    //operate();
});

btnDivide.addEventListener("click",function enterDivide () {
    console.log("÷")
    operator = "÷";
    //operate();
});


/* btnOne.addEventListener("click",function enterOne () {
    
    if (number1 === "default"){
        number1 = "1"
        console.log("number1 = 1")
    } else {
    number2 = "1";
    console.log("number2 = 1")
    }
});

btnTwo.addEventListener("click",function enterTwo () {
    if (number1 === "default"){
        number1 = "2"
        console.log("number1 = 2")
    } else {
    number2 = "2";
    console.log("number2 = 2")
    }
}); */

const numButtons = document.querySelectorAll(".num-btn");

numButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.num;
    console.log("Pressed:", value);

    if (number1 === "default"){
        //number1 = "2"
        number1 = value;
        console.log("number 1 is " + number1)
        display.textContent = number1;
    } else {
    number2 = value;
    console.log("number 2 is " + number2)
    display.textContent = number2;
    }



  });
});

btnEquals.addEventListener("click",operate);




//console.log(operator);


function operate (){ 

    const a = Number(number1);
const b = Number(number2);

let result = "";

if (operator === "+") {
    result = (a + b);
} else if (operator === "-") {
    result = (a - b);
} else if (operator === "x") {
    result = (a * b);
} else if (operator === "÷") {
    result = (a / b);
}

total = result; 
console.log("Total is " + total)

display.textContent = total;


number1 = total;
number2 = "default";



} 




//btnMinus.addEventListener("click", (operator = "-"))



//console.log(operator);

//} 