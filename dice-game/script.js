// *********** 2 PLAYER DICE GAME ************

var rounds = Number(prompt("how many rounds do you want to play"));

var playerOneScore = 0;
var playerTwoScore = 0;

for (var i = 1; i <= rounds; i++){
    var playerOneRoll = Math.floor((Math.random()*6) + 1);
    console.log("player one: " + playerOneRoll);
    
    var playerTwoRoll = Math.floor((Math.random()*6) + 1);
    console.log("player two: " + playerTwoRoll);

    if(playerOneRoll > playerTwoRoll){
        playerOneScore++;
    }else if(playerTwoRoll > playerOneRoll){
        playerTwoScore++;
    }else{
        console.log("Draw");
        
    }


}

console.log("Player 1 Score: " + playerOneScore + " and Player 2 Score: " + playerTwoScore);



if(playerOneScore > playerTwoScore){
    alert("Player 1 Wins!!!")
}else if(playerTwoScore > playerOneScore){
    alert("Player 2 Wins!!!")
}else{
    alert("Same Score. Match Draw!!")
}
