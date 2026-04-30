// // // ************* CHAPTER 35 : FUNCTIONS ************

// // function greetings(){
// //     alert("Hello User")
// // }

// // greetings();

// // // ===== function for reversing string =======

// // function reverseStr(nameReverse){
// //     for(i = nameReverse.length-1; i >= 0; i--){
// //     console.log(nameReverse[i]);
// //     }
// // }

// // var userName = prompt("Enter your name")
// // reverseStr(userName);   //inside paranthesis its argument and in function's paranthesis its parameter



// // // ======= CHAPTER 2 ========

// // // Ques 01 Function of Calculations

// // function calc(num1 , num2, operator){
// //     if (operator=== "+"){
// //         console.log(num1 + num2);

// //     }else if(operator === '-'){
// //         console.log(num1 - num2);

// //     }else if(operator === '*'){
// //         console.log(num1 * num2);

// //     }else if(operator === '/'){
// //         console.log(num1 / num2);

// //     }
// // }

// // var userNum1 = parseInt(prompt("Enter 1st number"));
// // var userNum2 = parseInt(prompt("Enter 2nd number"));
// // var userOperator = prompt("Enter any operator +,-,*,/")

// // calc(userNum1, userNum2, userOperator);

// // //Ques 02 Functionn of user age

// // function userInfo(name , age) {
// //     console.log(name + " is " + age + " years old");

// // }

// // var userName = prompt("Enter your name");
// // var userAge = prompt("Enter your age");
// // userInfo(userName, userAge);

// // // Ques 03 

// // function temperature(temp){
// //     if(temp >= 0 && temp <= 10){
// //         console.log("Cold");

// //     }else if (temp > 10 && temp <= 30 ){
// //         console.log("Normal");

// //     }else if(temp > 30 ){
// //         console.log("Hot");

// //     }else {
// //         console.log("Invalid Temp");

// //     }
// // }
// //  var userInput = parseInt(prompt("Enter temperature"));
// //  temperature(userInput);


// //  Ques 04

// // function num(a){
// //     if (a > 0){
// //         console.log('positive');

// //     }else if(a < 0){
// //         console.log("negative");

// //     }else if (a === 0){
// //         console.log("Zero");

// //     }
// // }

// // var userNum = parseInt(prompt("Enter any number"));
// // num(userNum);


// // Ques 05

// // function validation(name1){
// //     if(name1.length >= 5){
// //         console.log("valid");

// //     }else{
// //         console.log("invalid");

// //     }
// // }

// // var userFullName = prompt("Enter username");
// // validation(userFullName);


// // ******* CHAPTER 37: PASSING DATA BACK FROM THEM *******

// // var marks = 80;
// // var result;

// // if (marks >= 80) {
// //     result = "Grade A"
// // } else if (marks >= 50) {
// //     result = "Grade B"
// // } else {
// //     result = "Fail"
// // }

// // console.log(result);


// //////////////////////////////////////

// function studentResult(marks) {
//     var result;

//     if (marks >= 80) {
//         result = "Grade A"
//     } else if (marks >= 50) {
//         result = "Grade B"
//     } else {
//         result = "Fail"
//     }

//     return result;

// }
// var student1 = studentResult(30)
// console.log(student1);

// /////////////////////////////////////

// if (student1 === "Grade A") {
//     console.log("You got scholarship");

// } else {
//     console.log("Try Again");

// }

// ///////////////////////////////////////

// function checkResult(myName, num) {
//     // console.log("My name is " + myName);
//     // console.log("Result = " + studentResult(num));

//     // if (studentResult(num) === "Grade A") {
//     //     console.log("You got scholarship");

//     // } else {
//     //     console.log("Try Again");

//     // }

//     return [myName , num]
// }

// var arr = checkResult("Sohaima", 80);
// console.log("name: " + arr[0] + " and result: " + arr[1]);


// ******** CHAPTER 38: LOCAL AND GLOBAL VARIABLE **********


// Global variable can be accessed everrywhere in code buy local variable only in function...
// if we want loca variable outside we use return in function 

// ///////////////////////////


// var my_name = "Sohaima" // global

// function accessName(){
    // var my_name = "Emma"  //local   // functional scope
//     console.log(my_name);
    
// }

// accessName();

// console.log(my_name);



// ======== Tricky Question ========

// //  Ques 01

// var x = 10;

// function checkingVariable(){
//     var x = 20;
//     console.log(x);
    
// }

// console.log(x);

// // Ques 02

// var myName = "Sohaima";
// function changingName (){
//     myName = "Emma";
//     return myName;
// }

// console.log(changingName());

// // Ques 03

// function checkingErr(){
//     var num = 50;
// }

// console.log(num);

// // Ques 04

// function varAssign (){
//   return marksObtained = 30;
// }
// console.log(varAssign());

// // Ques 05

// if(true){
//     var totalExpense = 95;
// }

// console.log(totalExpense);

// =========== Advanced Thinking Question =============

//Ques 01 

num1 = 20;
num2 = 50;

function average(){
    var averageOfTwoNum = ((num1 + num2) / 2);
    return averageOfTwoNum;
}

console.log(average());

// Ques 02

function squareAndCube(num){
    var squareOfNum = num ** 2;
    var cubeOfNum = num ** 3;

    return [squareOfNum , cubeOfNum];
}

var array = squareAndCube(10);

console.log("Square: "+ array[0] + " Cube: " + array[1]) ;


// Ques 03



















