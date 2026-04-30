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

var newDate = new Date();
var day = newDate.getDate();
if (day < 16){
    console.log("First Fifteen days of the month");
}else {
    console.log("Last days of Month");
    
}

// Question 06


var todayDate = new Date();
console.log("Current Date: " + todayDate);
var currentTimeInMs = todayDate.getTime();
console.log("Elapsed miliseconds since January 1, 1970 is " + currentTimeInMs);

// converting miliseconds to minutes

var oneSecond = 1000;
var oneMinute = oneSecond * 60;

var currentTimeInMin = currentTimeInMs / oneMinute;
console.log("Elapsed minutes since January 1, 1970 is " + currentTimeInMin);


// Question 07

var today_01 = new Date();
var hours = today_01.getHours();

if(hours < 12){
    console.log("It's AM");
}else {
    console.log("It's PM");
}

//  Question 08

var laterDate = new Date(2025 , 3 , 12);
console.log("Later Date is: " + laterDate);

// Question 09





