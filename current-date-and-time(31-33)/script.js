// // ********* CHAPTER 31 CURRENT DATE AND TIME *******

// var rightNow = new Date();   // gives current date and time

// console.log(rightNow);

// var rightNowStr = rightNow.toString();

// console.log(rightNowStr);


// // console.log(typeof rightNow);
// console.log(typeof rightNowStr);  // checking type

// console.log(rightNowStr[0]);  // checking index values

// console.log(rightNowStr.slice(0,4));  // checking more methods

// // **** GETTING DAY (number)
// var theDay = rightNow.getDay();
// console.log(theDay); // result is in number (its showing day's number)


// // ****** GETTING DAY (names)
// var dayNames = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
// var now = new Date();
// var today = now.getDay();

// // console.log(today);
// var nameOfToday = dayNames[today]; 

// console.log(nameOfToday);  // now it gives day's name


// // **************** CHAPTER 32 : EXTRACTING PARTS OF DATE AND TIME *******************

// var currentDay = new Date();

// // ===== Month

// var month = currentDay.getMonth(); // months starts from 0-11, 0 is januarys
// console.log(month); // 3 = April

// // ===== Hours

// var hours = currentDay.getHours();
// console.log(hours); // 12 is noon, 0 is midnight, 23 is 11pm

// // ===== Time

// var time = currentDay.getTime();
// console.log(time); // gives in miliseconds starting from 1970

// // ******** CHAPTER 33: SPECIFYING DATE AN TIME *********

// // => we can specify future date

// // var todaysDate = new Date();
// // var ramadanDate = new Date("Feb 07, 2027");

// // calcualting time from todays date

// // var todayMs = todaysDate.getTime();
// // var ramadanMs = ramadanDate.getTime();

// // var diff = ramadanMs - todayMs;
// // console.log(diff);

// // // => converting milliseccond to days

// // var oneSecond = 1000;
// // var oneMin = oneSecond * 60;
// // // console.log(oneMin);

// // var oneHour = oneMin * 60
// // // console.log(onehour);

// // var oneDay = oneHour * 24
// // // console.log(oneDay);

// // var oneMonth = oneDay * 30
// // // console.log(oneMonth);

// // // => Now for difference

// // var totalDays = Math.floor(diff / oneDay);
// // // console.log(totalDays); // 298 days left

// // var remainingMsAfterDays = diff % oneDay;
// // // console.log(remainingMsAfterDays); //remaining milieconds after days

// // var remainingHours = Math.floor(remainingMsAfterDays / oneHour);
// // // console.log(remainingHours); // 11 hours

// // var remainingMsAfterHours =  remainingMsAfterDays % oneHour;
// // // console.log(remainingMsAfterHours); // remaining miiliseconds after hours

// // var remainingMins = Math.floor(remainingMsAfterHours / oneMin); 
// // // console.log(remainingMins);

// // var remainingMsAfterMins = remainingMsAfterDays % oneMin;
// // // console.log(remainingMsAfterMins); // remaining milliseconds after minutes

// // var remainingSeconds = Math.floor(remainingMsAfterMins / oneSecond);

// // console.log(totalDays + " Days "  +  remainingHours + " Hours " + remainingMins + " Minutes " + remainingSeconds + " Seconds ");










// ======== SET INTERVAL =========

setInterval(() => {
    var todaysDate = new Date();
var ramadanDate = new Date("Feb 07, 2027");

// calcualting time from todays date

var todayMs = todaysDate.getTime();
var ramadanMs = ramadanDate.getTime();

var diff = ramadanMs - todayMs;
// console.log(diff);

// => converting milliseccond to days

var oneSecond = 1000;
var oneMin = oneSecond * 60;
// console.log(oneMin);

var oneHour = oneMin * 60
// console.log(onehour);

var oneDay = oneHour * 24
// console.log(oneDay);

var oneMonth = oneDay * 30
// console.log(oneMonth);

// => Now for difference

var totalDays = Math.floor(diff / oneDay);
// console.log(totalDays); // 298 days left

var remainingMsAfterDays = diff % oneDay;
// console.log(remainingMsAfterDays); //remaining milieconds after days

var remainingHours = Math.floor(remainingMsAfterDays / oneHour);
// console.log(remainingHours); // 11 hours

var remainingMsAfterHours =  remainingMsAfterDays % oneHour;
// console.log(remainingMsAfterHours); // remaining miiliseconds after hours

var remainingMins = Math.floor(remainingMsAfterHours / oneMin); 
// console.log(remainingMins);

var remainingMsAfterMins = remainingMsAfterDays % oneMin;
// console.log(remainingMsAfterMins); // remaining milliseconds after minutes

var remainingSeconds = Math.floor(remainingMsAfterMins / oneSecond);
console.clear()
console.log(totalDays + " Days "  +  remainingHours + " Hours " + remainingMins + " Minutes " + remainingSeconds + " Seconds ");






}, 1000);









 











