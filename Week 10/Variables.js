/*Numbers*/
let age = 25;      // This is an integer
let price = 19.99; // This is a float

/*Strings*/
let name = 'John';  // Single quote string, but tic marks are best practice
let city = "London"; // Double quote string
let greeting = `Hello, ${name}!`; // Template literal with variable interpolation

/*Boolean represents 2 VALUES true or false - they get used a lot for conditional statements*/
let isLoggedIn = true;
let hasPermission = false;

/*Object - a data structure that can hold multiple values in the form of KEY VALUE PAIRS*/
/*Can represent real world entities or structures in a program*/
let user = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 30,
    isMember: true
};

/*Function - a block of code that performs a specific task that you can use several times in your code by calling it*/
function greet(name) {
    return `Hello, ${name}!`;
}

let sayHello = greet('John'); //the out put when calling the function will be "Hello John!"

/*Undefined - a variable that has been declared but hasn't been assigned a value*/
let n;

/*Null - creating a variable that has non value*/
let x = null;

/*Variable Interpolation*/
let fname = "Alice";
let howOld = 25;

// Without interpolation (concatenation):
let introduce = "Hello, my name is " + fname + " and I am " + howOld + " years old.";

// With interpolation (template literals):
let introduceInterpolated = `Hello, my name is ${fname} and I am ${howOld} years old.`;

console.log(introduceInterpolated); // "Hello, my name is Alice and I am 25 years old."


