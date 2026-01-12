// CHAPTER 01 ALERTS


// Quest: 01
// alert("hello");

// Quest: 02
// alert("Error! Please enter a valid password.");

// Quest: 03
// alert("Welcome to JS land\nHappy Coding!"); for line break

// Quest: 04
// alert("Welcome to JS land");
// alert("Happy coding! \nPrevent this page from creating additional dialogs");

// Quest: 05
// alert("Hello... I can run JS through my web browser's console");

// Quest: 06 and 07
// Solved in HTML file

// *************************************************************

// CHAPTER 02 VARIABLES FOR STRINGS

// Quest: 01

// var userName;

// Quest: 02

// var myName = "Sohaima Nasir";

// Quest: 03

// var message = "Hello World";
// alert(message);

// Quest: 04

// var studentName = "John Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Developer";

// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// Quest: 05

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// Quest: 06

// var email = "sohaimanasir1@gmail.com";
// alert ("My email address is " + email);

// Quest: 07

// var book = "I am trying to learn from the book A smarter way to learn JavaScript";
// alert(book);

// Quest: 08

// document.write("Yah! I can write HTML content through JavaScript");

// Quest: 09

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// *************************************************************

// CHAPTER 03 VARIABLES FOR NUMBERS

// Quest: 01

// var age = 15;
// alert("I am " + age + " years old");

// Quest: 02

// var visit = 14;
// alert("You have visited this site " + visit + " times");

// Quest: 03

// var birthYear = 2002;
// document.write("My birth year is " + birthYear + "<br>" + " Data type of my declared variable is number")"

// Quest: 04

// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var productQuantity = 5;

// document.write("<b>" + visitorName + "</b>" + " ordered" + "<b>" + " " + productQuantity + "</b>" + " " + "<b>" + productTitle + "</b>" + " on XYZ Clothing Store");

// *************************************************************

// CHAPTER 04 VARIABLE NAMES: LEGAL & ILLEGAL





// *************************************************************

// CHAPTER 05 MATH EXPRESSIONS

// Quest: 01 

// var num1 = 3;
// var num2 = 5;
// var sumOfNum = num1 + num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + sumOfNum);

// Quest: 02 (a)

// var num1 = 3;
// var num2 = 5;
// var subOfNum = num1 - num2;

// document.write("Sub of " + num1 + " and " + num2 + " is " + subOfNum);

// Quest: 02 (b)

// var num1 = 3;
// var num2 = 5;
// var mulOfNum = num1 * num2;

// document.write("Product of " + num1 + " and " + num2 + " is " + mulOfNum);

// Quest: 02 (c)

// var num1 = 3;
// var num2 = 5;
// var divOfNum = num1 / num2;

// document.write("Division of " + num1 + " and " + num2 + " is " + divOfNum);

// Quest: 02 (d)

// var num1 = 3;
// var num2 = 5;
// var modOfNum = num1 % num2;

// document.write("Modulus of " + num1 + " and " + num2 + " is " + modOfNum);

// Quest: 03

// var num;
// document.write("Value after variable declaration is " + num + "<br>");

// num = 10;
// document.write("Value after initialization is " + num + "<br>");

// num = ++num;
// document.write("Value after increment is " + num + "<br>");

// num = num + 7;
// document.write("Value after addition is " + num + "<br>");

// num = --num;
// document.write("Value after decrement is " + num + "<br>");

// num = num % 3;
// document.write("The remainder is " + num + "<br>");

// Quest: 04

// var ticketPrice = 600;
// var totalTickets = 5;
// var totalCost = ticketPrice * totalTickets;

// document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + totalCost + " PKR");

// Quest: 05

// var num = 4;
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + num * i + "<br>");
// }

// Quest: 06

// var Celsius = 25;
// var celtoFahr = (Celsius * 9/5) + 32;
// document.write(Celsius + "°C is " + celtoFahr + "°F" + "<br>");

// var Fahrenheit = 70;
// var fahrtoCel = (Fahrenheit - 32) * 5/9;
// document.write(Fahrenheit + "°F is " + fahrtoCel + "°C");

// Quest: 07

// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;

// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// document.write("<h1>Shopping Cart</h1><br>");
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Quantity + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Quantity + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);

// Quest: 08

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// Quest: 09

// var usDollar = 10;
// var saudiRiyal = 25;
// var pakRupee = (usDollar * 104.80) + (saudiRiyal * 28);

// document.write("<h1>Currency in PKR</h1><br>");
// document.write("Total Currency in PKR: " + pakRupee);

// Quest: 10

// var num = 2;
// var result = ((num+5) * 10 ) / 2;

// document.write("The result is " + result);

// Quest: 11

// var currentYear = 2025;
// var birthYear = 2002;
// var age = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age + "<br>");

// Quest: 12

// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius ** 2;

// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area + "<br>");