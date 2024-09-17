// function to display the current time in an alert box
function displayTime() {
    alert("Current Time: " + new Date().toLocaleTimeString());// use the date object to get the current time in a string
}

// function to change the background color of the page
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();// set the body's background color to a randomly generated color
}

// function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';//all possible hex digits
    let color = '#';//the color string starts with #
    for (let i = 0; i < 6; i++) {//loop 6 times to generate the 6 digit hex code
        color += letters[Math.floor(Math.random() * 16)];//add a random hex digit to the color
    }
    return color;//return the random hex color
}

// function to show an alert message
function showAlert() {
    alert("Hello! You have been selected to participate in the Hunger Games.");//display the alert with a custom message
}

// function to open Google in a new tab - ok this is kind of cool
function openGoogle() {
    window.open("https://www.google.com", "_blank");//use window.open to open a new tab that brings you to googles website, _blank makes it open in a new tab
}

// function to reset/reload the page
function resetPage() {
    location.reload();//location.reload() reloads the page to it's original state
}