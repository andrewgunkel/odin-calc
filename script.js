const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const btnEquals = document.querySelector("#btn-equals");
const btnPeriod = document.querySelector("#btn-period");
const numButtons = document.querySelectorAll(".num-btn");


const btnClear = document.querySelector("#btn-clear");

const display = document.querySelector("#display");

let number1 = "";
let operator = "";
let number2 = "";
let total = "";
let result = "";

btnPeriod.addEventListener("click",function enterPeriod () {

    if (operator === "") {
        if (!number1.includes('.')) {
            number1 = number1 + '.';
            console.log("Pressed: .");
            display.textContent = number1;
    }}

    else if (!number2.includes('.')) {
        number2 = number2 + '.';
        display.textContent = number1 + " " + operator + " " + number2; 
    }
    console.log(".");

});

btnClear.addEventListener("click",function enterClear () {

    console.log("Entries cleared")
    operator = "";
    number1 = "";
    number2 = "";
    total = "";
    display.textContent = "";

});


btnPlus.addEventListener("click",function enterPlus () {

    if (operator === "") {
        console.log("+")
        operator = "+";
    }

    else {
        operate();
        operator = "+";
        console.log("+")
    }

    display.textContent = number1 + " " + operator;
});

btnMinus.addEventListener("click",function enterMinus () {

    if (operator === "") {
        console.log("-")
        operator = "-";
    }

    else {
        operate();
        operator = "-";
        console.log("-")
    }

    display.textContent = number1 + " " + operator;
});

btnMultiply.addEventListener("click",function enterMultiply () {

    if (operator === "") {
        console.log("x")
        operator = "x";
    }

    else {
        operate();
        operator = "x";
        console.log("x")
    }

    display.textContent = number1 + " " + operator;
});

btnDivide.addEventListener("click",function enterDivide () {

    if (operator === "") {
        console.log("÷")
        operator = "÷";
    }
    else {
        operate();
        operator = "÷";
        console.log("÷")
    }

    display.textContent = number1 + " " + operator;
});



numButtons.forEach(btn => {
  btn.addEventListener("click", () => {

        const value = btn.dataset.num;
        console.log("Pressed:", value);

        if (operator === "" && total === "completed") {

            number1 = "";
            number1 = number1 + value;
            display.textContent = number1 ;
            total = "";
        }

        else if (operator === ""){

            number1 = number1 + value;
            console.log("number 1 is " + number1)
            display.textContent = number1 ;

        } else {

            number2 = number2 + value;
            console.log("number 2 is " + number2)
            display.textContent = number1 + " " + operator + " " +  number2;
        }

    });

});

btnEquals.addEventListener("click",operate);


function operate (){ 

    const a = Number(number1);
    const b = Number(number2);

    //let result = "";
    if (operator === "" || number1 === "" || number2 === "") {

        console.log("Please enter all inputs");
        return;

    }

    else if (operator === "÷" && b === 0) {
        console.log("That's the forbidden sequence!")
        return;

    }

    else if (operator === "+") {
        result = Math.round((a + b) * 100) / 100;

    } else if (operator === "-") {
        result = Math.round((a - b) * 100) / 100;

    } else if (operator === "x") {
        result = Math.round((a * b) * 100) / 100;

    } else if (operator === "÷") {
        result = Math.round((a / b) * 100) / 100;
    }

    total = result; 

    console.log("Total is " + total)

    display.textContent = total;

    number1 = total;
    number2 = "";
    operator = "";
    total = "completed";
} 
