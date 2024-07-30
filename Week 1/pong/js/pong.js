//canvas and context
var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000 / 60);

//global friction variable
var fy = .97;
const originalSpeed = {vx: -2, vy: -2}
const players = [new Player("Player 1"), new Player("Player 2")];

const pad = [new Box(), new Box()]; //paddle array

let hitCount = 0;//variable for the hit count for increase ball speed function



//p1 setup
pad[0].w = 20;
pad[0].h = 150;
pad[0].x = pad[0].w / 2;
pad[0].color = 'orange';
//p2 setup
pad[1].w = 20;
pad[1].h = 150;
pad[1].x = c.width - pad[1].w / 2;
pad[1].color = 'hotpink';
//ball setup
var ball = new Box();
ball.w = 20;
ball.h = 20;
ball.vx = originalSpeed.vx;
ball.vy = originalSpeed.vy;
ball.color = `black`;

var particles = [];

//screen shake variables
var shakeDuration = 0;
var shakeMagnitude = 5;

function main() {
    //erases the canvas
    ctx.clearRect(0, 0, c.width, c.height);

    // Update particles
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.alpha <= 0) {
            particles.splice(index, 1); // Remove dead particles
        }
    });

    //p1 accelerates when key is pressed 
    if (keys[`w`]) {
        pad[0].vy -= pad[0].force;
    }
    if (keys[`s`]) {
        pad[0].vy += pad[0].force;
    }

    //p2 accelerates when key is pressed 
    if (keys[`o`]) {
        pad[1].vy -= pad[1].force;
    }
    if (keys[`l`]) {
        pad[1].vy += pad[1].force;
    }

    // Applies friction
    pad[0].vy *= fy;
    pad[1].vy *= fy;

    // Player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move();

    //p1 collision
    if (pad[0].y < 0 + pad[0].h / 2) {
        pad[0].y = 0 + pad[0].h / 2;
    }
    if (pad[0].y > c.height - pad[0].h / 2) {
        pad[0].y = c.height - pad[0].h / 2;
    }
    //p2 collision
    if (pad[1].y < 0 + pad[1].h / 2) {
        pad[1].y = 0 + pad[1].h / 2;
    }
    if (pad[1].y > c.height - pad[1].h / 2) {
        pad[1].y = c.height - pad[1].h / 2;
    }

    //ball collision with left and right walls
    if (ball.x < 0) {
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
        resetBallSpeed(); // Reset ball speed to original
        hitCount = 0; // reset hit count when ball collides with the wall
    }
    if (ball.x > c.width) {
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
        resetBallSpeed(); // Reset ball speed to original
        hitCount = 0; // reset hit count when ball collides with wall
    }
    if (ball.y < 0) {
        ball.y = 0;
        ball.vy = -ball.vy;
    }
    if (ball.y > c.height) {
        ball.y = c.height;
        ball.vy = -ball.vy;
    }

    //p1 with ball collision
    if (ball.collide(pad[0])) {
        ball.x = pad[0].x + pad[0].w / 2 + ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, pad[0].color);
        startScreenShake(10);
        if (hitCount % 10 === 0) { // Every 10 hits the ball will move faster
            increaseBallSpeed();
        }
    }

    //p2 with ball collision
    if (ball.collide(pad[1])) {
        ball.x = pad[1].x - pad[1].w / 2 - ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, pad[1].color);
        startScreenShake(10);
        if (hitCount % 10 === 0) { // Every 10 hits
            increaseBallSpeed();
        }    
    }

    // Apply screen shake before drawing the objects
    ctx.save();
    applyScreenShake();
    pad[0].draw();
    pad[1].draw();
    ball.draw();
    ctx.restore();
}

// Function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create particles
function createParticles(x, y, color) {
    for (let i = 0; i < 20; i++) {
        particles.push(new Particle(x, y, color));
    }
}

// Function to start screen shake
function startScreenShake(duration) {
    shakeDuration = duration;
}

// Function to apply screen shake
function applyScreenShake() {
    if (shakeDuration > 0) {
        const dx = Math.random() * shakeMagnitude * 2 - shakeMagnitude;
        const dy = Math.random() * shakeMagnitude * 2 - shakeMagnitude;
        ctx.translate(dx, dy);
        shakeDuration--;
    }
}
//function to make the ball go faster after every ten hits
function increaseBallSpeed() {
    ball.vx *= 1.1; // Increase the horizontal speed by 10%
    ball.vy *= 1.1; // Increase the vertical speed by 10%
    }

function resetBallSpeed() {
    ball.vx = originalSpeed.vx;
    ball.vy = originalSpeed.vy;
    
    }

