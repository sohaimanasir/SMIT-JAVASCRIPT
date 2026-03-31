//  ********** QUESTION 01 **********

 var a = 10;

    document.write("<h1>Question no. 01</h1>")
    
    document.write("The value of a is: " + a + "<br>");

    // Pre-increment
    document.write("The value of ++a is: " + (++a) + "<br>");

    // Post-increment
    document.write("The value of a++ is: " + (a++) + "<br>");

    // Pre-decrement
    document.write("The value of --a is: " + (--a));
    document.write("<br>Now the value of a is: " + a);


// ********* QUESTION 02 ************

var c = 2;
var d = 1;

var result =  --c - --d + ++d + d--;

document.write("<h1> Question no. 02 </h1>" + "<br>");

document.write("<h3> Stage 1 </h3>" + "<br>");

document.write(" --c becomes 2 - 1 = 1" + "<br>");

document.write("<h3> Stage 2 </h3>" + "<br>");

document.write(" --d becomes 1 - 1 = 0 and --c - --d becomes 1 - 0 = 1" + "<b>");

document.write("<h3> Stage 3 </h3>" + "<br>");

document.write("++d becomes 0 + 1 = 1 and --c - --d + ++d becomes 1 + 1 = 2" +"<br>")

document.write("<h3> Stage 4 </h3>" + "<br>");

document.write("d-- becomes 1 - 1 = 0 but d uses current value 1" + "<br>");

document.write("<h3> Result </h3>" + "<br>");

document.write("--c - --d + ++d + d-- becomes " + result +"<br>");

document.write( "c = " +  c +"<br>");
document.write(" d = " + d + "<br>");
document.write("result = " + result +  "<br>");


// *********** QUESTION 03 *************

document.write("<h1>Question no .03</h1>" + "<br>");

var name = prompt("Enter your name: ");
document.write("Hello, " + name + "! Welcome!");


// ********** QUESTION 03 ***************

var n = prompt("Enter a number:") || 5;

document.write("<h1>Question no. 04</h1>")

document.write(n + " x 1 = " + n * 1 + "<br>");
document.write(n + " x 2 = " + n * 2  + "<br>");
document.write(n + " x 3 = " + n * 3 + "<br>");
document.write(n + " x 4 = " + n * 4 + "<br>");
document.write(n + " x 5 = " + n * 5 + "<br>");
document.write(n + " x 6 = " + n * 6 + "<br>");
document.write(n + " x 7 = " + n * 7 + "<br>");
document.write(n + " x 8 = " + n * 8 + "<br>");
document.write(n + " x 9 = " + n * 9 + "<br>");
document.write(n + " x 10 = " + n * 10 + "<br>");





