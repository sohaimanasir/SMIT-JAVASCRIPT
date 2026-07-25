// ************ BMI CALCUATOR ***************

var weight = document.getElementById("weight");
var height = document.getElementById("height");
var calculateBtn = document.getElementById("calculate");
var result = document.getElementById("result");
var status = document.getElementById("status");

// event listeners

calculateBtn.addEventListener("click", function () {
  var weightValue = parseFloat(weight.value);
  var heightValue = parseFloat(height.value);

  // converting height from cm to m

  var heightValueInMeter = heightValue / 100;

  //    bmi calculation

  var bmiResult = weightValue/(heightValueInMeter * heightValueInMeter);
  result.textContent = bmiResult.toFixed(1);

  // if else statement for status

  if(bmiResult < 18.5){
    status.textContent = "Underweight"
  }else if(bmiResult <= 24.9){
    status.textContent = "Healthy"
  }else if(bmiResult <= 29.9){
    status.textContent = "Overweight"
  }else{
    status.textContent = "Obese"
  }
});
