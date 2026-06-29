// ==================== Local Storage ====================

var storeData = JSON.parse(localStorage.getItem("users")) || [];

var editId = null;
var editMode = false;

// ==================== Helper Functions ====================

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(storeData));
}

function createCell(value) {
  var td = document.createElement("td");
  td.innerText = value;
  return td;
}

function createActionButtons(userId) {
  var td = document.createElement("td");

  var editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  editBtn.setAttribute("onclick", "editData(" + userId + ")");

  var delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  td.append(editBtn, delBtn);

  return td;
}

function editData(userId) {
  var selectedUser;
  for (var i = 0; i < storeData.length; i++) {
    if (storeData[i].id == userId) {
      selectedUser = storeData[i];
      break;
    }
  }
  document.getElementById("name").value = selectedUser.name;
  document.getElementById("email").value = selectedUser.email;
  var genderRadio = document.querySelectorAll("input[name = 'gender']");
  var checkedSkill = document.querySelectorAll("input[name = 'skill']");

  // for gender
  for (var i = 0; i < genderRadio.length; i++) {
    if (genderRadio[i].value == selectedUser.gender) {
      genderRadio[i].checked = true;
    }
  }

  // for skills
  for(var i = 0; i < checkedSkill.length; i++){
    for(var j = 0; j < selectedUser.skills.length; j++){
        if(checkedSkill[i].value == selectedUser.skills[j]){
          checkedSkill[i].checked = true;
        }      
    }
  }

  document.querySelector("input[type = 'submit']");
  console.log(document.querySelector("input[type = 'submit']").value = "Upload");
  

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

  var selectedGender = document.querySelector("input[name='gender']:checked");

  // Selected Skills

  var selectedSkills = document.querySelectorAll("input[name='skill']:checked");

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

  // Date using as unique id

  var id = Date.now();
  // console.log(id);

  // edit mode

  if(editMode){
    for(var i = 0; i < storeData[i].length; i++){
      if(storeData[i].id == editId){
        storeData[i].name = name;
      }
    }
  }

  // ==================== Save User ====================

  if (isValid) {
    var user = {
      id: id,
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

    tableRow.append(createActionButtons(storeData[i].id));

    tableBody.append(tableRow);
  }
}

//

// ==================== Initial Render ====================

tableCreate();
