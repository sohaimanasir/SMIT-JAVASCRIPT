// Q 01

const teamA = ["Ali", "Zara"];
const teamB = ["Bilal", "Sana"];

const allPlayers = [...teamA, ...teamB];

console.log(allPlayers);

// Q 02

const profile = {
  name: "Arif",
  city: "Karachi"
};

const updatedProfile = {
  ...profile,
  email: "arif@example.com"
};

console.log(updatedProfile);

//  Q 03

const numbers = [22, 25, 28, 30, 27];

const [first, , , , fifth] = numbers;

console.log(first);
console.log(fifth);

// Q 04

function calculateTotal(a, b = 0, c = 0){
    return a + b + c;
}

console.log(calculateTotal(100, 250, 75));
console.log(calculateTotal(50));
console.log(calculateTotal(0));

// Q 05

const order = {
  customerName: "Ahmed",
  city: "Lahore",
  items: ["laptop", "mouse"],
  paymentMethod: "cash"
};

const { customerName,city, ...orderDetails } = order;

console.log(customerName);
console.log(city);
console.log(orderDetails);

// Q 06

function bookTicket(passenger, seat, flightNumber){
    return `${passenger}  has seat ${seat} on flight ${flightNumber}`
}

const bookingData = ["Arif", "12A", "PK-303"]
 
console.log(bookTicket(...bookingData));

// Q 07 DESTRUCTURING

const config = {
    appName : "MyApp",
    theme : {
        mode : "dark",
        accentColor : "Blue"
    }
}

const {theme} = config;
const {mode} = theme;
const {accentColor} = theme;

console.log(mode);
console.log(accentColor);

//  Q 08

function createPost(title, ...tags){
    return `Post: ${title} | Tags: ${tags}`
}

console.log(createPost("My first blog", "JS", "coding", "tutorial"));

// Q 09

const defaults = {
    fontSize: 14,
    theme : "light",
    notifications: "true"
}

const userPrefs = {
    ...defaults,
    theme: "dark"
}

const finalSetting = {
    ...defaults,
    ...userPrefs
}

console.log(finalSetting);

// Q 10

const scores = [98, 91, 85, 70, 60];

const [highest, secondHighest, ...others] = scores;
const otherSum = others.reduce((acc , curr) => {
    return acc + curr
}, 0)

console.log(highest);
console.log(secondHighest);
console.log(otherSum);



