// ******** ROCK PAPER SCISSOR **********

var user = (prompt("rock, paper, scissor?"));
var userInput = user.toLowerCase();

console.log(userInput);

if(userInput === "rock" || userInput === "paper" || userInput === "scissor"){
    console.log("Valid");
    
}else{
    console.log("invalid");
    
}

// array for computer choice

var options = ['rock', 'paper', 'scissor'];

var randomOpt = options[Math.floor(Math.random() * options.length)];

console.log("Computer chose " + randomOpt );

// Game Logic

if (userInput === randomOpt){
    alert("Its a Tie!!")
}else if( (userInput==="rock" && randomOpt==="scissor") ||
        (userInput==="paper" && randomOpt==="rock") ||
        (userInput==="scissor" && randomOpt==="paper") )
        {
            alert("YOU WIN!!!")
        }
else{
    alert("Computer Wins!!")
}
