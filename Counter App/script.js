// **************** Counter App **********************

var count = 0;
var counter = document.getElementById("counter");
var increase = document.getElementById("increment");
var decrease = document.getElementById("decrement");
var reset = document.getElementById("reset");

// ===== increament =====

function increaseCount() {
  counter.textContent = ++count;
}

// ==== decrement =====

function decreaseCount() {
  if (count > 0) {
    counter.textContent = --count;
  } else {
    alert("No Negative number!");
  }
}

// ==== reset =====
function resetCount() {
  counter.textContent = 0;
  count = 0;
}

// ==== Event Listeners ====

increase.addEventListener("click", increaseCount);

decrease.addEventListener("click", decreaseCount);

reset.addEventListener("click", resetCount);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    increaseCount();
  }

  if (event.key === "ArrowDown") {
    decreaseCount();
  }

  if (event.code === "Space") {
    event.preventDefault();
    resetCount();
  }

    console.log(event.code);

});
