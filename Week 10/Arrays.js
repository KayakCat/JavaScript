/*Array Declaration*/

/*Array Literal - the one below is an array called x with three elements*/
var x = [10, 9, 8];

/*Array constructor*/
var x = new Array();//this creates an empty array
var x = new Array(3); // this creates an empty array with length 3
var x = new Array(10, 9, 8); // this creates an array with elements [10, 9, 8]

/*using .push() method*/
var x = [10, 9, 8];
x.push(43); // adds 43 to the end of the array
console.log(x); // the out put will be: [10, 9, 8, 43]

/*.push() should only be used on array elements that are themselves arrays - probably won't need this*/
var x = [[1, 2], [3, 4]]; 
x[0].push(43); // adds 43 to the first sub-array
console.log(x); // the output will be: [[1, 2, 43], [3, 4]]

/*using .splice() method*/
var x = [10, 9, 8];
x.splice(1, 1); // removes 1 element at index 1 - the number 9 in this case
console.log(x); // the output will be: [10, 8]

/*.length property of an array returns the number of elements in that array*/
var x = [10, 9, 8];
console.log(x.length); // the output will be: 3

/*using foreach method*/
var x = [10, 9, 8]; //create the array
x.forEach(function(item){
  console.log(item);
});
// the outputwill look like the below:
// 10
// 9
// 8










