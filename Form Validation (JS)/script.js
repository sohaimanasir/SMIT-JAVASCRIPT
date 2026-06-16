function formSubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var fatherName = document.getElementById("fatherName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var phoneNum = document.getElementById("phNo").value;

  var fatherNameErr = document.getElementById();
  var emailErr = document.getElementById();
  var passwordErr = document.getElementById();
  var dobErr = document.getElementById();
  var numErr = document.getElementById();


  // // validating error
  // var name_err = document.getElementById("name_err");
  // console.log(name_err);

  // if(!name || name.length < 3){
  //    name_err.textContent = "Invalid Name";
  // }else{
  //     name_err.textContent = ""
  //     console.log("Name ===> " + name);

  // }

//   // Radio Button
//   var selectGender = document.getElementsByName("gender");

//   for (var i = 0; i < selectGender.length; i++) {
//     if (selectGender[i].checked) {
//       console.log(selectGender[i].value);
//     }
//   }


//  radio with query selector
 var selectedGender = document.querySelector("input[name='gender']:checked");
 if(selectedGender){
    console.log(selectedGender.value);
    
 } 

 // checkbox

  var selectedSkills = document.querySelectorAll("input[name='skill']:checked");
  var skillErr = document.getElementById("skillErr")
 if(selectedSkills.length > 0){
    for (var i = 0 ; i < selectedSkills.length ; i++){
        console.log(selectedSkills[i].value);
        
    }
    
}else{
    skillErr.textContent = "Please select atleast one field"
}

}
