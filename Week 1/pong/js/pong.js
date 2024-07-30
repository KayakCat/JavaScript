//canvas and context
var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000 / 60);

//global friction variable
var fy = .97;

const players = [new Player("Player 1"), new Player("Player 2")];





//p1 setup
players[0].pad = new Box();
players[0].pad.w = 20;
players[0].pad.h = 150;
players[0].pad.x = players[0].pad.w / 2;
players[0].pad.color = 'orange';
//p2 setup
players[1].pad = new Box();
players[1].pad.w = 20;
players[1].pad.h = 150;
players[1].pad.x = c.width - players[1].pad.w / 2;
players[1].pad.color = 'hotpink';
//ball setup
var ball = new Box();
ball.w = 20;
ball.h = 20;
ball.vx = -2;
ball.vy = -2;
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
        players[0].pad.vy -= players[0].pad.force;
    }

    if (keys[`s`]) {
        players[0].pad.vy += players[0].pad.force;
    }

    //p2 accelerates when key is pressed 
    if (keys[`o`]) {
        players[1].pad.vy -= players[1].pad.force;
    }
    if (keys[`l`]) {
        players[1].pad.vy += players[1].pad.force;
    }

    //applies friction
    players[0].vy *= fy;
    players[1].vy *= fy;

    //player movement
    players[0].move();
    players[1].move();

    //ball movement
    ball.move();

    //p1 collision
    if (players[0].y < 0 + players[0].h / 2) {
        players[1].y = 0 + players[1].h / 2;
    }
    if (players[0].y > c.height - players[0].h / 2) {
        players[0].y = c.height - players[0].h / 2;
    }

    //p2 collision
    if (players[1].y < 0 + players[1].h / 2) {
        players[1].y = 0 + players[1].h / 2;
    }
    if (players[1].y > c.height - players[1].h / 2) {
        players[1].y = c.height - players[1].h / 2;
    }

    //ball collision with left and right walls
    if (ball.x < 0) {
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
    }
    if (ball.x > c.width) {
        ball.x = c.width / 2;
        ball.y = c.height / 2;
        ball.vx = -ball.vx; // Reverse direction
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
    if (ball.collide(players[0].pad)) {
        ball.x = players[0].pad.x + players[0].pad.w / 2 + ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, players[0].pad.color);
        startScreenShake(10);
    }

    //p2 with ball collision
    if (ball.collide(players[1].pad)) {
        ball.x = players[1].pad.x - players[1].pad.w / 2 - ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, players[1].pad.color);
        startScreenShake(10);
    }

    // Apply screen shake before drawing the objects
    ctx.save();
    applyScreenShake();
    players[0].draw();
    players[1].draw();
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