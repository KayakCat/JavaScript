/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
//select the option sections heading 2(h2), add click event to it and make the sides div show and hide by using classlist.toggle()
document.querySelector('h2').addEventListener('click', function() {
    document.querySelector('.sides').classList.toggle('hidden');
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
//
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



/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

document.addEventListener('DOMContentLoaded', () => {
    const upInputs = document.querySelectorAll('input.u');
    const upOutputs = document.querySelectorAll('.output');

    upInputs.forEach((input, index) => {
        // Set initial value of the input to the current player's 'u' key
        input.value = player[index].keys.u;
        // Display the initial key in the output div
        upOutputs[index].textContent = player[index].keys.u;

        // Add a keydown event listener to update the input and output
        input.addEventListener('keydown', (event) => {
            // Update the input value to the key pressed
            input.value = event.key;

            // Update the player's 'u' key property
            player[index].keys.u = event.key;

            // Display the key name in the output div
            upOutputs[index].textContent = event.key;
        });

        // Add a focus event listener to pause the game
        input.addEventListener('focus', () => {
            currentState = 'pause';
        });
    });
});


       
