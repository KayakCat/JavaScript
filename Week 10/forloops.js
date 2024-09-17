/*for loops - used to run a block of code a specific number of times*/
/*let i = 0;: Initializes the loop counter i at 0
i < amount;: The loop continues as long as i is less than amount
i++: After each loop iteration, i is incremented by 1.*/
for (let i = 0; i < amount; i++) {
    // do something
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output:
// 0
// 1
// 2
// 3
// 4

/*while loop - will run as long as a specific condition is true and is often used when the number of iterations is not known in advance*/
while (x < 10) {
    // do something
}

let x = 0;
while (x < 5) {
    console.log(x);
    x++;
}
// Output:
// 0
// 1
// 2
// 3
// 4

/*for in loop - used to iterate over the properties in an object*/
for (let key in objectName) {
    console.log(objectName[key]);
}
/*key is a variable that represents each property key in objectName.
objectName[key] accesses the value of the corresponding key.*/
let person = { name: "Latoya", age: 21, city: "Rhode Island" };

for (let key in person) {
    console.log(person[key]);
}
// the output will be:
// Latoya
// 21
// Rhode Island

/*conditional statements*/
let n = 10;

if (n < 5) {
    console.log("n is less than 5");
} else if (n === 10) {
    console.log("n is equal to 10");
} else {
    console.log("n is greater than 5 but not 10");
}
// the output will be: n is equal to 10


