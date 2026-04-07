let num = Math.random();
console.log(num);

var num2 = Math.floor(Math.random() * 10) + 1;
console.log(num2);

// ************** RANDOM NUMBER GUESING GAME **************


var randomNum = Math.floor(Math.random() * 10) + 1;

for ( i = 0; i < 3; i++){
    var guessNum = Number(prompt("Enter any number 1-10:"));

    if(guessNum===randomNum){
        alert("You Win!");
        break;
    }
    else if(guessNum < randomNum){
        alert("Number is too low");
    }
    else if(guessNum > randomNum) {

        alert("Number too high");
    }

    if(i === 2){
        alert("gameover! The number was " + randomNum)
    }
    
}