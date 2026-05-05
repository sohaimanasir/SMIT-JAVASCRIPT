// ========= Chapter 41 WHILE lOOP AND DO WHILE LOOP ============ //

//=> While Loop

// var i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;

// }

// var password;
// for (var i = 1; 1 < 5; i++) {
//   password = prompt("Enter your password");
//   if (password === "12345") {
//     console.log("Correct Password");
//   } else {
//     console.log("Wrong Password");
//   }
// }


var password;
while (password !== "12345"){
    password = prompt("Enter password");
    if(password !== "12345"){
        console.log("Incorrect Password");
    }
}

console.log("Correct Password");










// => Do While Loop
// => It always run one time if condition is not even true because its condition is written in end.

var index = 0;
do {
  console.log(index);
  index++;
} while (index < 0);
