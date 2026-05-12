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


// ===== OBJECT DESTRUCTURING ======

var {fName : firstName , isEnrolled} = student;
console.log(firstName);
console.log(isEnrolled);


// ===== Array Destructuring =====

var arr = [0 , 1 , 2 , 3 , 4];
var [num1 , num2] = arr;
console.log(num2);



var keys = Object.keys(student);
for (var i = 0; i < keys.length; i++){
    console.log(keys[i] , ":" , student[keys[i]]);
    
}



// ======== METHODS => function in object ===========

var newObj = {
    name: "Sohaima",
    greeting : function greet(){
        return "Hello Sohaima"
    }
}

console.log(newObj.greeting());

newObj.sayBye = function bye(){
    return "byeee Sohaima"
}

console.log(newObj.sayBye());

// ****** Practice Ques *******

var productObj = {
    productName : "Lipstick",
    productType : "Cosmetics",
    productBrand : "Huda Beauty",
    price : 500 ,
    buyProduct : function buy(){
        return "Product added to cart"
    } 
}

console.log(productObj);
// console.log(productObj.discount);

productObj.discount = "10%";
console.log(productObj.discount);
console.log(productObj.buyProduct());

var productKeys = Object.keys(productObj);
for(var i = 0 ; i < productKeys.length ; i++){
    console.log(productKeys[i]);
    
}


