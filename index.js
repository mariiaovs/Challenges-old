console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

number % 2 ? console.log("ODD") : console.log("EVEN");

// Part 3: Hotdogs
const numberOfHotdogs = 1;
let price = 0;

if (numberOfHotdogs >= 1000000) {
  price = numberOfHotdogs * 0.1;
} else if (numberOfHotdogs >= 100) {
  price = numberOfHotdogs;
} else if (numberOfHotdogs >= 5) {
  price = numberOfHotdogs * 1.5;
} else {
  price = numberOfHotdogs * 2;
}

console.log(price);

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const firstName = "Archibald";

const greeting =
  "Hello " + (firstName === "Feline" ? "Coach" : firstName) + "!";

console.log(greeting);
