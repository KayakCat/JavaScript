

    // Loop through paddles for friction, movement, and collisions
    for(let i = 0; i < pad.length; i++){
        pad[i].vy *= fy;  // Apply friction

        // Paddle movement
        if (i === 0) {
            if (keys[`w`]) pad[i].vy -= pad[i].force;
            if (keys[`s`]) pad[i].vy += pad[i].force;
        } else {
            if (keys[`o`]) pad[i].vy -= pad[i].force;
            if (keys[`l`]) pad[i].vy += pad[i].force;
        }

        // Apply friction
        pad[i].vy *= fy;

        // Move paddles
        pad[i].move();

        // Paddle collisions with canvas borders
        if (pad[i].y < 0 + pad[i].h / 2) {
            pad[i].y = 0 + pad[i].h / 2;
        }
        if (pad[i].y > c.height - pad[i].h / 2) {
            pad[i].y = c.height - pad[i].h / 2;
        }
    }

    //ball movement
    ball.move();

    //ball collision with left and right walls
    if (ball.x < 0) {
        scores[1]++;//when the ball hits the left wall the player 2 scores
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
        resetBallSpeed(); // Reset ball speed to original speed
        hitCount = 0; // reset hit count when ball collides with the wall
        console.log(`${scores[0]} | ${scores[1]}`);
        
    }
    if (ball.x > c.width) {
        scores[0]++;//when the ball hits the right wall player 1 scores
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
        resetBallSpeed(); // Reset ball speed to original speed
        hitCount = 0; // reset hit count when ball collides with wall
        console.log(`${scores[0]} | ${scores[1]}`);
    }
    if (ball.y < 0) {
        ball.y = 0;
        ball.vy = -ball.vy;
    }
    if (ball.y > c.height) {
        ball.y = c.height;
        ball.vy = -ball.vy;
    }

    //paddle with ball collision
    for (let i = 0; i < pad.length; i++) {
        if (ball.collide(pad[i])) {
            ball.vx = -ball.vx;
            if (i === 0) {
                ball.x = pad[i].x + pad[i].w / 2 + ball.w / 2;
            } else {
                ball.x = pad[i].x - pad[i].w / 2 - ball.w / 2;
            }
            createParticles(ball.x, ball.y, pad[i].color); //particles fly out on impact with paddle
            startScreenShake(10); //screen shake when ball makes impact with paddle
            if (hitCount % 10 === 0) { // every ten hits the ball will move faster
                increaseBallSpeed();
            }
        }
    }
    //this is how to do the high score list
    var body = document.querySelector(`body`)
    var names = [
        { f: `J`, l: `A`},
        { f: `B`, l: `b`},

    ]

    var message = ``;

    message += `<div>`
        for(let i=0; i<names.length; i++)
        {
            message += `<p>`
                for(let key in names[i]){
                message += names[i][key]
                message =+``
            }
            message += `<p>`
        }


