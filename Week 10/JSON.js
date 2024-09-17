/*JSON stands for JavaScript Object Notation-it is a lightweight data format used to represent data structures and exchange information between systems, particularly over the web. It is primarily used to send and receive data in a format that both humans and machines can read and write.
JSON is language-independent but uses conventions that are similar to JavaScript object literals.
It is widely used for data exchange between web servers and browsers or other applications (like APIs)*/

/*JSON object as a string*/
let obj = '{"x":10, "y":20}';

/*If you have a JavaScript object and you want to convert it into a JSON string (for example, to send it over the network), you use JSON.stringify()*/
let jsObj = { x: 10, y: 20 };
let jsonString = JSON.stringify(jsObj);
console.log(jsonString); // the output will be: '{"x":10,"y":20}'

