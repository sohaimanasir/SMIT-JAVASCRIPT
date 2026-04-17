// ******************** CHAPTER 21-25 *******************


// ======= Question 01 =======

// var userInput1 = prompt("write your first name");
// var userInput2 = prompt("Write your last name");

// var userFullName = userInput1 + userInput2;
// alert("Welcome "+ userFullName);


// // ======= Question 02 =======

// var userMobile = prompt("Enter your favorite mobile phone model");
// var userInputLength = userMobile.length;

// alert("My favorite phone is: "+ userMobile + "\n Length of String is " + userInputLength);


// ======= Question 03 =======

// var userNationality = "Pakistani";
// var indexOfLetter = userNationality.indexOf('n');

// alert('String: ' + userNationality + ' Index of n is: ' + indexOfLetter)


// ======= Question 04 ======

// var stringName = "Hello World!";
// var lastIndexOfLetter = stringName.lastIndexOf("l");

// alert ("String: " + stringName + "\nLast index of 'l' " + lastIndexOfLetter);


// ====== Question 05 ========

// var stringOne = "Pakistani";
// var charOfLetter =  stringOne.charAt(3);

// console.log("String: " + stringOne + "\nCharacter at index 3 is: " + charOfLetter);


// ======= Question 06 ======

// var firstName =  prompt("Enter first Name");
// var lastName = prompt("Enter last name");

// var  fullName = firstName.concat(" ", lastName);

// console.log("Good Morning " + fullName);



// ======= Question 07 ======

// var cityName = "Hyderabad";
// var newCityName = cityName.replace("Hyder" , "Islam");

// console.log("City Name is: " + cityName + "\nNew city name is: " + newCityName);


// ======= Question 08 ======

// var message = "Ali and Sara are best friends. They play cricket and football together";
// var newMessage = message.replaceAll("and" , "&");

// console.log(newMessage);


// ====== Question 09 ======

// var newString = "472";
// var stringToNumber = parseInt(newString);

// console.log("Value: " + newString + "\nType: " + typeof(newString) + "\nValue: " + stringToNumber + "\nType: " + typeof(stringToNumber));


// ====== Question 10 =======

// var userInput = prompt("Enter a word to make it uppercase");
// var newUserInput = userInput.toUpperCase();

// console.log(newUserInput);

// ====== Question 11 =======

// var str = "javascript";
// var firstLetterCapital = str[0].toUpperCase();

// var newStr = firstLetterCapital + str.slice(1);

// console.log("Value: " + str + "\nNew Value: " + newStr);


// ====== Question 12 ======

// var num = 35.36;
// var newNum = num.toString();

// var numWithoutDecimal = newNum.replace(".", "");
// console.log(numWithoutDecimal);


// ====== Question 13 ======

// var username = prompt("Enter username and don't use '@' , ',' , '.' , '!'");

// var isValid = true;

// for (i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if(code == 33 || code == 44 || code == 46 || code == 64){
//         isValid = false;
//     }

// }

// if (isValid == false){
//     alert('invalid username');
// }else{
//     alert('Welcome ' + username)
// }


// ====== Question 14 ======

// var userChoice = prompt("What do you want to order Sir/Ma'am");
// var UserChoiceLower = userChoice.toLowerCase();

// var items = ['cake' , 'apple pie', 'cookie', 'chips', 'patties']
// var isFound = false;

// for (i = 0; i < items.length; i++){
//     if(items[i] == UserChoiceLower){
//         isFound = true;
//     }
// }

// if(isFound == true){
//     alert("yes we have " + UserChoiceLower + " available");
// }else{
//     alert("We are Sorry " + UserChoiceLower + " is not available")
// }

// ====== Question 15 ======



// ====== Quesion 16 =======

// var university = "University of Karachi";

// var universityInArray = university.split('');
// console.log(universityInArray);

// for (i = 0; i < universityInArray.length; i++){
//     console.log(universityInArray[i]);
    
// }


// ===== Question 17 ======

// var userInput = prompt('Enter any word');
// alert(userInput.charAt(userInput.length - 1));  // hello = 5 letter 5-1 = 4 is the last index
