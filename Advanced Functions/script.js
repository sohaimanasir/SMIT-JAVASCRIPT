// Expression function  

// a function stored with variable 

const mutiply = function (a, b) {
    return a * b;
}

console.log(mutiply(2,3));

// Anonymous function 

// function without name

//  ==============================================================

// ARROW FUNCTION

const addition = (a,b) => a + b;
console.log(addition(6,4));

// adding objects in arrow function

const data = () => ({name: "Sohaima"});
console.log(data());

// regular function

const person = {
    name: "Sohaima",
    greet: function(){
        return this.name;
    }
};

console.log(person.greet());

// ===== arrow function does not support this =====




