// ================= ASSIGNMENT CHAPTER 31-34 ================= //

// Question 01

var currentDate = new Date();
console.log(currentDate);

// Question 02

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Ocotber",
  "November",
  "December",
];
var now = new Date();
var currentMonth = now.getMonth();
var currentMonthName = months[currentMonth];
console.log("Current Month: " + currentMonthName);

// Question 03

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var today = new Date();
var currentDay = now.getDay();
var todaysDay = days[currentDay];
console.log("Today is " + todaysDay);

// Question 04

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var today = new Date();
var currentDay = now.getDay();
var todaysDay = days[currentDay];

if (todaysDay === "Sat" || todaysDay === "Sun") {
  console.log("Its Funday");
} else {
  console.log("Today is " + todaysDay);
}

// Question 05

