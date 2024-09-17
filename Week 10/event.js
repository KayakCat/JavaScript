/*event listener - something: the HTML element you want to attach the event to (e.g., a button).
'eventName': the name of the event to listen for (e.g., 'click', 'mouseover', 'keydown').
function() {}: the callback function that will run when the event is triggered.*/

something.addEventListener('eventName', function() {
    // code to execute when the event occurs
});

/*button click*/
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

