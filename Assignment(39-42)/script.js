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

function mainFunction(a, b, c) {
  var avgOfSub = average(a, b, c);
  var marksObtained = a + b + c;
  var totalMarks = 300;
  var percentOfSub = percentage(marksObtained, totalMarks);

  console.log("Average: " + avgOfSub);
  console.log("Percentage: " + percentOfSub);
}

mainFunction(49, 68, 97);

// ===== Question 05 =====

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality
// You can code for single character as of now.

function myIndexOf(word, letter) {
  var i = 0;

  while (i < word.length) {
    if (word[i] === letter) {
      return i;
    }
    i++;
  }
  return -1;
}

console.log(myIndexOf("hello", "o"));

// Question 06
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function vowelDel(x) {
  var newSentence = "";
  var i = 0;
  while (i < x.length) {
    if (
      x[i] !== "a" &&
      x[i] !== "e" &&
      x[i] !== "i" &&
      x[i] !== "o" &&
      x[i] !== "u"
    ) {
      newSentence = newSentence + x[i];
    }

    i++;
  }

  return newSentence;
}

console.log(vowelDel("Hello my name is Sohaima"));

// Question 07

// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence "Pleases read this application and give me gratuity"
// Such occurrences are ea, ea, ui.

function checkVowel(y) {
  var count = 0;
  var i = 0;

  while (i < y.length) {
    switch (y[i]) {
      case "a":
        if (
          y[i + 1] == "a" ||
          y[i + 1] == "e" ||
          y[i + 1] == "i" ||
          y[i + 1] == "o" ||
          y[i + 1] == "u"
        ) {
          count++;
        }
        break;

      case "e":
        if (
          y[i + 1] == "a" ||
          y[i + 1] == "e" ||
          y[i + 1] == "i" ||
          y[i + 1] == "o" ||
          y[i + 1] == "u"
        ) {
          count++;
        }

        break;

      case "i":
        if (
          y[i + 1] == "a" ||
          y[i + 1] == "e" ||
          y[i + 1] == "i" ||
          y[i + 1] == "o" ||
          y[i + 1] == "u"
        ) {
          count++;
        }

        break;

      case "o":
        if (
          y[i + 1] == "a" ||
          y[i + 1] == "e" ||
          y[i + 1] == "i" ||
          y[i + 1] == "o" ||
          y[i + 1] == "u"
        ) {
          count++;
        }
        break;

      case "u":
        if (
          y[i + 1] == "a" ||
          y[i + 1] == "e" ||
          y[i + 1] == "i" ||
          y[i + 1] == "o" ||
          y[i + 1] == "u"
        ) {
          count++;
        }
        break;
    }
    i++;
  }
  return count;
}

console.log(checkVowel("Please read this application and give me gratuity"));

// Question 08

// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function calcMeter(c) {
  var meter = c * 1000;
  return meter;
}

function calcFeet(c) {
  var feet = c * 3280.84;
  return feet;
}

function calcInches(c) {
  var inches = c * 39370.1;
  return inches;
}

function calcCm(c) {
  var centimeter = c * 100000;
  return centimeter;
}

function allCalc(c) {
  var kmToMeter = calcMeter(c);
  var kmToFeet = calcFeet(c);
  var kmToInches = calcInches(c);
  var kmToCentimeter = calcCm(c);

  console.log(
    "meter are: " +
      kmToMeter +
      " , feet are: " +
      kmToFeet +
      " , inches are: " +
      kmToInches +
      ", centimeter are: " +
      kmToCentimeter,
  );
}

allCalc(30);
