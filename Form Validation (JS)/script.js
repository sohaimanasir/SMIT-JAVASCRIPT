// ==================== Local Storage ====================

var storeData = JSON.parse(localStorage.getItem("users")) || [];

// ==================== Helper Functions ====================

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(storeData));
}

function createCell(value) {
  var td = document.createElement("td");
  td.innerText = value;
  return td;
}

function createActionButtons() {
  var td = document.createElement("td");

  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  td.append(editBtn, delBtn);

  return td;
}

// ==================== Form Submit ====================

function formSubmit(e) {
  e.preventDefault();

  var isValid = true;

  // Inputs

  var name = document.getElementById("name").value.trim();
  var fatherName = document.getElementById("fatherName").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var phoneNum = document.getElementById("phNo").value.trim();
  var city = document.getElementById("city").value;

  // Error Elements

  var nameErr = document.getElementById("name_err");
  var fatherNameErr = document.getElementById("father_err");
  var emailErr = document.getElementById("email_err");
  var passwordErr = document.getElementById("pass_err");
  var dobErr = document.getElementById("dob_err");
  var numErr = document.getElementById("num_err");
  var genderErr = document.getElementById("genderErr");
  var skillErr = document.getElementById("skillErr");
  var cityErr = document.getElementById("cityErr");

  // Clear Previous Errors

  nameErr.textContent = "";
  fatherNameErr.textContent = "";
  emailErr.textContent = "";
  passwordErr.textContent = "";
  dobErr.textContent = "";
  numErr.textContent = "";
  genderErr.textContent = "";
  skillErr.textContent = "";
  cityErr.textContent = "";

  // Selected Gender

  var selectedGender = document.querySelector(
    "input[name='gender']:checked"
  );

  // Selected Skills

  var selectedSkills = document.querySelectorAll(
    "input[name='skill']:checked"
  );

  var skills = [];

  // ==================== Validation ====================

  // Name

  if (!name || name.length < 3) {
    nameErr.textContent = "Invalid Name";
    isValid = false;
  }

  // Father Name

  if (!fatherName || fatherName.length < 3) {
    fatherNameErr.textContent = "Invalid Name";
    isValid = false;
  }

  // Email

  if (!email) {
    emailErr.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailErr.textContent = "Enter a valid email";
    isValid = false;
  }

  // Password

  if (!password || password.length < 8) {
    passwordErr.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  // Phone Number

  if (!phoneNum || phoneNum.length !== 11) {
    numErr.textContent = "Enter a valid phone number";
    isValid = false;
  }

  // DOB

  if (!dob) {
    dobErr.textContent = "Date of Birth is required";
    isValid = false;
  }

  // Gender

  if (!selectedGender) {
    genderErr.textContent = "Please select gender";
    isValid = false;
  }

  // Skills

  if (selectedSkills.length === 0) {
    skillErr.textContent = "Please select at least one field";
    isValid = false;
  } else {
    for (var i = 0; i < selectedSkills.length; i++) {
      skills.push(selectedSkills[i].value);
    }
  }

  // City

  if (!city) {
    cityErr.textContent = "Please select a city";
    isValid = false;
  }

  // ==================== Save User ====================

  if (isValid) {
    var user = {
      name: name,
      fatherName: fatherName,
      email: email,
      phoneNum: phoneNum,
      dob: dob,
      city: city,
      gender: selectedGender.value,
      skills: skills,
    };

    storeData.push(user);

    saveUsers();

    console.log(user);

    alert("Form submitted successfully");

    e.target.reset();

    tableCreate();
  } else {
    console.log("Form Validation Error: Data Invalid or Missing");
  }
}

// ==================== Table Creation ====================

function tableCreate() {
  var tableBody = document.getElementById("table_body");

  tableBody.innerHTML = "";

  for (var i = 0; i < storeData.length; i++) {
    var tableRow = document.createElement("tr");

    for (var key in storeData[i]) {
      var value = storeData[i][key];

      if (Array.isArray(value)) {
        value = value.join(", ");
      }

      tableRow.append(createCell(value));
    }

    tableRow.append(createActionButtons());

    tableBody.append(tableRow);
  }
}

// ==================== Initial Render ====================

tableCreate();