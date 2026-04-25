// ************* CHAPTER 35 : FUNCTIONS ************

function greetings(){
    alert("Hello User")
}

// greetings();

// ===== function for reversing string =======

function reverseStr(nameReverse){
    for(i = nameReverse.length-1; i >= 0; i--){
    console.log(nameReverse[i]);
    }
}

// var userName = prompt("Enter your name")
reverseStr(userName);   //inside paranthesis its argument and in function's paranthesis its parameter

// Function of Calculations

function calc(num1 , num2, operator){
    if (operator=== "+"){
        console.log(num1 + num2);
        
    }else if(operator === '-'){
        console.log(num1 - num2);
        
    }else if(operator === '*'){
        console.log(num1 * num2);
        
    }else if(operator === '/'){
        console.log(num1 / num2);
        
    }
}

var userNum1 = parseInt(prompt("Enter 1st number"));
var userNum2 = parseInt(prompt("Enter 2nd number"));
var userOperator = prompt("Enter any operator +,-,*,/")

calc(userNum1, userNum2, userOperator);