// ************** ASSIGNMENT 10-14 **************

// ======= Question 01 =========

// var userInput = prompt("Enter city name");
// var cityName = userInput.toLowerCase();

// if(cityName==="karachi"){
//     alert("Welcome to the city of lights")
// }
// else{
//     alert("Welcome to " + cityName)
// }



// ====== Question 02 ==========

// var userInput = prompt("Enter your gender");
// var userGender = userInput.toLowerCase();

// if(userGender === "female"){
//     alert("Good Morning, Madam!");

// }else if(userGender === "male"){
//     alert("Good Morning, Sir!");
// }else{
//     alert("Good Morning " + userGender + " !");
// }



// ====== Question 03 =========

// var userInput = prompt("Enter color here to check traffic light rule");

// var userColor = userInput.toLowerCase();

// if(userColor === "red"){
//     alert("Must Stop!!")
// }else if(userColor === "green"){
//     alert("Move Now!!")
// }else if(userColor === "yellow"){
//     alert("Ready to move!!")
// }else{
//     alert ("Pretty color but its not in traffic light")
// }

// ====== Question 04 =======

// Program to check remaining fuel in car

// var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Fuel level is sufficient");
// }


// ====== Question 05 =======

// a) 
// var a = 4;
// if(++a === 5){
//     alert("given condition is true");
// }

// Result = Given condition is true.

// b)

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable is true");

// }

// Result = No Alert

// c)

//  var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// Result = Codition 4 is true

// d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// Result = The cost equals 


// e)

//  if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// Result = True

// f)

// if("car"  < "cat"){
//     alert("car is smaller than cat");
// }

// Result = car is smaller than cat


// ======= Question 06

// var sub1 = Number(prompt("Enter marks for subject 1:"));
// var sub2 = Number(prompt("Enter marks for subject 2:"));
// var sub3 = Number(prompt("Enter marks for subject 3:"));

// var totalMarks = 300;

// var obtainedMarks = sub1 + sub2 + sub3;

// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// alert("Marks Sheet\n" +
//       "Total marks: " + totalMarks + "\n" +
//       "Marks obtained: " + obtainedMarks + "\n" +
//       "Percentage: " + percentage.toFixed(2) + "%\n" +
//       "Grade: " + grade + "\n" +
//       "Remarks: " + remarks);

// ===== Qustion 07  ======

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var guess = parseInt(prompt("Guess a number between 1 and 10:"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Wrong! The secret number was " + secretNumber);
// }

// ===== Qustion 08  ======

// var number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is NOT divisible by 3");
// }


// ===== Qustion 09  ======

// var number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//     alert(number + " is an Even number");
// } else {
//     alert(number + " is an Odd number");
// }

// ===== Qustion 10  ======

// var T = parseInt(prompt("Enter temperature:"));

// if (T > 40) {
//     alert("It is too hot outside.");
// } else if (T > 30) {
//     alert("The Weather today is Normal.");
// } else if (T > 20) {
//     alert("Today's Weather is cool.");
// } else if (T > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("Temperature is below 10.");
// }

// ===== Qustion 11  ======

// var num1 = parseFloat(prompt("Enter first number:"));
// var num2 = parseFloat(prompt("Enter second number:"));
// var op   = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (op === "+") {
//     result = num1 + num2;
// } else if (op === "-") {
//     result = num1 - num2;
// } else if (op === "*") {
//     result = num1 * num2;
// } else if (op === "/") {
//     result = num1 / num2;
// } else if (op === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operator!";
// }

// alert("Result: " + result);



// ====== Question 12 ======

// var input = prompt("Enter a character:");
// var code = input.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//     alert("It is a Number");
// } else if (code >= 65 && code <= 90) {
//     alert("It is an Uppercase letter");
// } else if (code >= 97 && code <= 122) {
//     alert("It is a Lowercase letter");
// } else {
//     alert("It is something else");
// }

// ======= Question 13 ======

