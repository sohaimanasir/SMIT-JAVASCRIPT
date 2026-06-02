// ======== Selection by ID Name ========

var eleOne = document.getElementById("heading-1");
eleOne.style.color = "purple";
eleOne.style.textDecorationLine = "underline";
console.dir(eleOne);
// console.log(eleOne);

//  ======= Selection by Class Name ========

var eleTwo = document.getElementsByClassName("heading-2");


// for(var i = 0; i < eleTwo.length; i++){
//     console.log(eleTwo[i]);
//     console.dir(eleTwo[i]);
// }

// ======= Selection by Tag Name ========

var eleThree = document.getElementsByTagName("p");
console.log(eleThree);

// ======= Selection by Query Selector (Select only first one)========

var eleFour = document.querySelector("#heading-1");
// console.dir(eleFour);
console.log(eleFour);

var eleFive = document.querySelector(".lorem");
// console.log(eleFive);
console.dir(eleFive);

// ======= Selection by Query Selector All =======

var eleSix = document.querySelectorAll(".heading-2");
console.log(eleSix);

var arr = Array.from(eleSix);
console.dir(arr);


