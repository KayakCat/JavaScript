
//select the option sections heading 2(h2), add click event to it and make the sides div show and hide by using classlist.toggle()
document.querySelector('h2').addEventListener('click', function() {
    document.querySelector('.sides').classList.toggle('hidden');
});


//fill paddles
document.addEventListener('DOMContentLoaded', () => {
    const fillIn = document.querySelectorAll('input.fill');
    const outPut = document.querySelectorAll('.output');

    fillIn.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const color = event.target.value;//get the color from player input

            // Update the players fill color
            player[index].fill = color;

            // update the paddles fill color
            pad[index].fill = color;

            // update the hex code display
            outPut[index * 2].textContent = color;

            // update paddle color
            pad[index].draw(); 
        });
    });
});

// change stroke color
document.addEventListener('DOMContentLoaded', () => {
    const strokeIn = document.querySelectorAll('input.stroke');
    const outPut = document.querySelectorAll('.output');

    strokeIn.forEach((input, index) => {
        // starting value of stroke
        input.value = player[index].stroke;
        // Display the initial stroke color in the output div
        outPut[(index * 3) + 1].textContent = player[index].stroke; // Adjust the index based on output arrangement

        // event listener for player input
        input.addEventListener('input', (event) => {
            const color = event.target.value;

            // Update the stroke based on player input
            player[index].stroke = color;

            // Update the stroke on the paddle
            pad[index].stroke = color;

            // hex display to show color the player selected
            outPut[(index * 3) + 1].textContent = color;

            // draw the the paddle with the new stroke color
            pad[index].draw();
        });
   });

});



document.addEventListener('DOMContentLoaded', () => {
    const upInputs = document.querySelectorAll('input.u');
    const downInputs = document.querySelectorAll('input.d');
    const straightInputs = document.querySelectorAll('input.s');
    const keyOutputs = document.querySelectorAll('.output');

    // up inputs set initial value, display the initial up value
    upInputs.forEach((input, index) => {
        input.value = player[index].keys.u;
        keyOutputs[index * 6].textContent = player[index].keys.u;
        //event listener for key presses
        input.addEventListener('keydown', (event) => {
            input.value = event.key;
            player[index].keys.u = event.key;
            keyOutputs[index * 6].textContent = event.key;
        });
        //event listener to pause when changing key letter
        input.addEventListener('focus', () => {
            currentState = 'pause';
        });
    });

    // down inputs set initial value, display the initial up value
    downInputs.forEach((input, index) => {
        input.value = player[index].keys.d;
        keyOutputs[index * 6 + 1].textContent = player[index].keys.d;
        //event listener for key presses
        input.addEventListener('keydown', (event) => {
            input.value = event.key;
            player[index].keys.d = event.key;
            keyOutputs[index * 6 + 1].textContent = event.key;
        });
        //event listener to pause when changing key letter
        input.addEventListener('focus', () => {
            currentState = 'pause';
        });
    });

    // straight inputs set initial value, display the initial up value
    straightInputs.forEach((input, index) => {
        input.value = player[index].keys.s;
        keyOutputs[index * 6 + 2].textContent = player[index].keys.s;
        //event listener for key presses
        input.addEventListener('keydown', (event) => {
            input.value = event.key;
            player[index].keys.s = event.key;
            keyOutputs[index * 6 + 2].textContent = event.key;
        });
        //event listener to pause when changing key letter
        input.addEventListener('focus', () => {
            currentState = 'pause';
        });
    });
});
