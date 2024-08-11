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
document.addEventListener('DOMContentLoaded', () => {
    const fillIn = document.querySelectorAll('input.fill');
    const outPut = document.querySelectorAll('.output');

    fillIn.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const color = event.target.value;

            // Update the player's fill property
            player[index].fill = color;

            // Update the paddle's fill property
            pad[index].fill = color;

            // Update the display for the color hex code
            outPut[index * 2].textContent = color;

            // Optionally, update the paddle color directly
            pad[index].draw(); // Assuming `draw` method updates the visual appearance
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
    const keyInputs = document.querySelectorAll('input.u, input.d, input.s');
    const keyOutputs = document.querySelectorAll('.output');

    // Update key properties and display key names when inputs change
    keyInputs.forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const keyName = event.target.value;
            const playerIndex = Math.floor(index / 3); // Determine which player (0 or 1)
            const keyType = ['u', 'd', 's'][index % 3]; // Determine key type (up, down, straight)
            
            // Update the player's key property
            player[playerIndex].keys[keyType] = keyName;

            // Display the key name in the output div
            keyOutputs[index].textContent = keyName;
        });
    });

    // Optional: Add keydown event listener to update inputs with actual keys
    document.addEventListener('keydown', (event) => {
        keyInputs.forEach((input, index) => {
            if (event.code === player[Math.floor(index / 3)].keys[['u', 'd', 's'][index % 3]]) {
                input.value = event.key;
                const playerIndex = Math.floor(index / 3); // Determine which player (0 or 1)
                const keyType = ['u', 'd', 's'][index % 3]; // Determine key type (up, down, straight)
                
                // Update the player's key property
                player[playerIndex].keys[keyType] = event.key;

                // Display the key name in the output div
                keyOutputs[index].textContent = event.key;
            }
        });
    });
});
