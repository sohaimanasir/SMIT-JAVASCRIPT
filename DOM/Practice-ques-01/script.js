// Q-1
var eleOne = document.getElementById("title");
console.log(eleOne);
// Q-2
var eleTwo = document.getElementsByClassName("description");
var arr = Array.from(eleTwo);
console.log(eleTwo[0]);

// Q-3
var eleThree = document.getElementsByTagName("h2");

var arr2 = Array.from(eleThree);
console.log(arr2[1].textContent);


// Q-4
var eleFour = document.querySelector("#box");
console.log(eleFour.innerHTML);

// Q-5
var eleFive = document.querySelectorAll(".fruit")
console.log(eleFive[2].textContent);

// Q-6
var eleSix = document.getElementById("title");
console.log(eleSix.innerText = "DOM Assignment completed");

//Q-7
var eleSeven = document.getElementById("box");
console.log(eleSeven.innerHTML = "<h2>Hello</h2>");















