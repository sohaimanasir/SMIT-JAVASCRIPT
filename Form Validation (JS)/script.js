function formSubmit(e) {
  e.preventDefault();
  var isValid = true;

  var name = document.getElementById("name").value;
  var fatherName = document.getElementById("fatherName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var phoneNum = document.getElementById("phNo").value;
  var city = document.getElementById("city").value;

  var fatherNameErr = document.getElementById("father_err");
  var emailErr = document.getElementById("email_err");
  var passwordErr = document.getElementById("pass_err");
  var dobErr = document.getElementById("dob_err");
  var numErr = document.getElementById("num_err");
  var genderErr = document.getElementById("genderErr");
  var cityErr = document.getElementById("cityErr");

  // ========= validating error =========

  // name error
  var name_err = document.getElementById("name_err");
  //   console.log(name_err);

  if (!name || name.length < 3) {
    name_err.textContent = "Invalid Name";
    isValid = false;
  } else {
    name_err.textContent = "";
  }

  // father name error

  if (!fatherName || fatherName.length < 3) {
    fatherNameErr.textContent = "Invalid Name";
    isValid = false;
  } else {
    fatherNameErr.textContent = "";
  }

  // Email Error

  if (!email) {
    emailErr.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailErr.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailErr.textContent = "";
  }

  // password validation

  if (!password || password.length < 8) {
    passwordErr.textContent = "Password must be atleast 8 characters";
    isValid = false;
  } else {
    passwordErr.textContent = "";
  }

  // phone number error

  if (!phoneNum || phoneNum.length !== 11) {
    numErr.textContent = "Enter a valid phone number";
    isValid = false;
  } else {
    numErr.textContent = "";
  }

  // DOB error

  if (!dob) {
    dobErr.textContent = "Date of Birth is required";
    isValid = false;
  } else {
    dobErr.textContent = "";
  }

  // Radio Button
  //   var selectGender = document.getElementsByName("gender");

  //   for (var i = 0; i < selectGender.length; i++) {
  //     if (selectGender[i].checked) {
  //       console.log(selectGender[i].value);
  //     }
  //   }

  //  radio with query selector
  var selectedGender = document.querySelector("input[name='gender']:checked");

  if (selectedGender) {
    genderErr.textContent = "";
    // console.log(selectedGender.value);
  } else {
    genderErr.textContent = "Please select gender";
    isValid = false;
  }

  // checkbox

  var selectedSkills = document.querySelectorAll("input[name='skill']:checked");
  var skillErr = document.getElementById("skillErr");

  var skills = [];

  if (selectedSkills.length > 0) {
    skillErr.textContent = "";

    for (var i = 0; i < selectedSkills.length; i++) {
      skills.push(selectedSkills[i].value);
      //   console.log(selectedSkills[i].value);
    }
  } else {
    skillErr.textContent = "Please select at least one field";
    isValid = false;
  }

  // city validation

  if (!city) {
    cityErr.textContent = "Please select a city";
    isValid = false;
  } else {
    cityErr.textContent = "";
  }

  // form validation is true

  if (isValid) {
    var user = {
      name,
      fatherName,
      email,
    //   password,
      phoneNum,
      dob,
      city,
      gender: selectedGender.value,
      skills,
    };

    console.log(user);

    alert("Form submitted successfully");
  } else {
    console.log("Form Validation Error: Data Invalid or Missing");
  }
}
