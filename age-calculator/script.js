// =========== CAlCULATING AGE BY DATE OF BIRTH ===========

// var dateOfBirth = new Date("May 03, 2002");
var dateOfBirth = new Date(prompt("Ener your date of birth 'Jan 01, 2001' format"));
var todaysDate = new Date();

// => Calculating time from todays date

var todaysDateMs = todaysDate.getTime();
var dateOfBirthMs = dateOfBirth.getTime();

// => Calculating difference in Time

var diff = todaysDateMs - dateOfBirthMs;

// => converting millisecond to yearss 

var oneSecond = 1000;

var oneMin = oneSecond * 60;

var oneHour = oneMin * 60;

var oneDay = oneHour * 24;

var oneMonth = oneDay * 30;

var oneYear = oneDay * 365.25;

// => Now for difference

var totalYears = Math.floor(diff / oneYear);
console.log(totalYears);

var remainingTimeAfterYears = diff % oneYear;
var totalMonths = Math.floor(remainingTimeAfterYears / oneMonth);
console.log(totalMonths);

var remainingTimeAfterMonths = remainingTimeAfterYears % oneMonth;
var totalDays = Math.floor(remainingTimeAfterMonths / oneDay)
console.log(totalDays);

// => Final Result

alert("You are " + totalYears + " years " + totalMonths + " months " + totalDays + " days old")







