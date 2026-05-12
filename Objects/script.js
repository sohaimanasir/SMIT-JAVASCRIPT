// ========= OBJECTS =========

// ******* CRUD => create , read , update , delete *******


// create 

var student = {
    fName : "John" ,
    lName : "Doe" ,
    email: "johndoe@gmail.com" , 
    isEnrolled : true ,
    rollNo : 20
}

//read

console.log(student.fName);

// update

student.skills = ["Html" , "CSS" , "JavaScript"]
console.log(student);

// delete

delete student["email"];
console.log(student);

console.log("email" in student);



// Empty object and assigning values later

var obj = {};

obj.name = undefined;
obj.name = 'Sohaima';
console.log(obj);
// checking if property is inside object
console.log("name" in obj);

// more properties

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


// ===== LOOP IN Objects ======

for (var keys in student){
    console.log(keys , student[keys]);
}


// ===== DESTRUCTURING ======

var {fName , isEnrolled} = student;
console.log(fName);
console.log(isEnrolled);

 



