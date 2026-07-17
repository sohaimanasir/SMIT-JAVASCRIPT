// ==== for red btn ====

var redBtn = document.getElementById("red");
redBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";

});

// ==== for blue btn ====

var blueBtn = document.getElementById("blue");
blueBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "black";

});

// ==== for green btn ====

var greenBtn = document.getElementById("green");
greenBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    document.body.style.color = "black";

});

// ==== for yellow btn ====

var yellowBtn = document.getElementById("yellow");
yellowBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";

});

// ==== for pink btn ====

var pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "black";

});

// ==== for black btn ====

var blackBtn = document.getElementById("black");
blackBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

// ==== for color wheel ====

var colorWheel = document.getElementById("wheel");
colorWheel.addEventListener("change", function(){
    document.body.style.backgroundColor = colorWheel.value
})