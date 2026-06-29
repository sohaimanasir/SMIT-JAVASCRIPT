// ========= ASSIGNMENT (function, switch statement, while loop, do-while loop)========

// ===== Question 01 ======
// Write a custom function power (a, b), to calculate the value of
// a raised to b.

function power(a, b) {
  var result = 1;

  while (b > 0) {
    result = result * a;
    b--;
  }

  return result;
}

var ans = power(2, 3);
console.log(ans);

// ===== Question 02 =====
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year oF not.
// Leap years ..., 2012, 2016, 2020,..

function leapYear(year) {
  if (year % 4 === 0) {
    return "Its a leap year";
  } else {
    return "Not a leap year";
  }
}

console.log(leapYear(2020));

// ===== Question 03 ======

// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S - a)(S b)(Sc)
// where, S = (a +b+c)/2
// Calculate area of trianlge using 2 function

function calculateS(a, b, c) {
  var S = (a + b + c) / 2;
  return S;
}

function calculateArea(a, b, c) {
  var s = calculateS(a, b, c);
  var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  return area;
}

var areaOfTriangle = calculateArea(2, 3, 4);
console.log(areaOfTriangle);

// ===== Question 04 ======
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the main Function
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function average(a, b, c) {
  var avg = (a + b + c) / 3;
  return avg;
}

function percentage(marksObtained, totalMarks) {
  var percent = (marksObtained / totalMarks) * 100;
  return percent;
}

function mainFunction(a , b, c) {
  var avgOfSub = average(a, b, c);
  var marksObtained = a + b + c;
  var totalMarks = 300;
  var percentOfSub = percentage(marksObtained, totalMarks);
  
  console.log("Average: " + avgOfSub);
console.log("Percentage: " + percentOfSub);
}

mainFunction(49, 68, 97);

