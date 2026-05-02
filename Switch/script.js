// =========== CHAPTER 39-40 SWITCH ============== //

// var day = "friday"

// switch(day){
//     case "saturday":
//     case "sunday":
//         console.log("weekend days");
//         break;
//     case "friday":
//         console.log("Half Day");
//         break;
//     default:
//         console.log("working days");

// }

// =========== PRACTICE QUESTIONS =========== //

//Question 01

var day = "friday";

switch (day) {
  case "monday":
    console.log("Start of week");
    break;
  case "friday":
    console.log("Almost Weekend");
    break;
  case "sunday":
    console.log("Weekend");
    break;

  default:
    console.log("normal days");
}

// Question 02

var operator = "+";
num1 = 2;
num2 = 3;

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log("Only +,-,*,/");
}

// Quetion 03

var color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Ready");
    break;

  default:
    console.log("Invalid Color");
}

// Question 04

var studentMarks = parseInt(prompt("Enter your marks"));
var marks = Math.floor(studentMarks / 10);
switch (marks) {
  case 10:
  case 9:
  case 8:
    console.log("A grade");
    break;
  case 7:
  case 6:
    console.log("B grade");
    break;
  default:
    console.log("Fail");
}

// Question 05

var month = parseInt(prompt("Enter number 1-12 to check month name"));

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Invalid Number");
}

// Question 06

var role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit Content");
    break;
  case "user":
    console.log("View Only");
    break;
  default:
    console.log("No Access");
}

// Question 7 => Same as question 01

// Question 08

var num = 2;

switch (num) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("three");
    break;
}

// Question 09

function checkDay(day) {
  switch (day) {
    case "monday":
      console.log("Start of week");
      break;
    case "friday":
      console.log("Almost Weekend");
      break;
    case "sunday":
      console.log("Weekend");
      break;

    default:
      console.log("normal days");
  }
}

checkDay("monday");

// Question 10

var marksInput = parseInt(prompt("Enter your Marks"));
var grade;
function studentStatus() {
  if (marks >= 80 && marks <= 100) {
    grade = "A-Grade";
  } else if (marks >= 60) {
    grade = "B-Grade";
  } else {
    grade = "Fail";
  }

  switch (grade) {
    case "A-Grade":
      console.log("Scholarship");
      break;
    case "B-Grade":
      console.log("Good");
      break;
    default:
      console.log("Try Again");
  }
}

studentStatus();
