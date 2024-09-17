/*setTimeout() executes a function once after a specified number of milliseconds*/
setTimeout(functionName, milliseconds);


function sayHello() {
    console.log("Hello after 2 seconds");
}

setTimeout(sayHello, 2000);  // calls sayHello() after 2000 milliseconds (2 seconds)

/*******************SetInterval()**************************/

/*setInterval() executes a function repeatedly in regular intervals in milliseconds*/
setInterval(functionName, milliseconds);


/*example showing the time on a clock updating every second*/
function showTime() {
    console.log(new Date().toLocaleTimeString());
}

setInterval(showTime, 1000);  // calls showTime every 1000 milliseconds (1 second)

/*example using countdown timer*/
function countdown() {
    console.log("Another 3 seconds have passed...");
}


setInterval(countdown, 3000);// executes countdown() every 3 seconds (3000 milliseconds)

