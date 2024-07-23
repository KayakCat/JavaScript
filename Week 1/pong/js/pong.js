//canvas and context
var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000 / 60);

//global friction variable
var fy = .97;

//p1 setup
var p1 = new Box();
p1.w = 20;
p1.h = 150;
p1.x = 0 + p1.w / 2;

//p2 setup
var p2 = new Box();
p2.w = 20;
p2.h = 150;
p2.x = c.width - p2.w / 2;
p2.color = `hotpink`;

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
        p1.vy += -p1.force;
    }

    if (keys[`s`]) {
        p1.vy += p1.force;
    }

    //p2 accelerates when key is pressed 
    if (keys[`o`]) {
        p2.vy += -p2.force;
    }
    if (keys[`l`]) {
        p2.vy += p2.force;
    }

    //applies friction
    p1.vy *= fy;
    p2.vy *= fy;

    //player movement
    p1.move();
    p2.move();

    //ball movement
    ball.move();

    //p1 collision
    if (p1.y < 0 + p1.h / 2) {
        p1.y = 0 + p1.h / 2;
    }
    if (p1.y > c.height - p1.h / 2) {
        p1.y = c.height - p1.h / 2;
    }

    //p2 collision
    if (p2.y < 0 + p2.h / 2) {
        p2.y = 0 + p2.h / 2;
    }
    if (p2.y > c.height - p2.h / 2) {
        p2.y = c.height - p2.h / 2;
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
    if (ball.collide(p1)) {
        ball.x = p1.x + p1.w / 2 + ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, p1.color);
        startScreenShake(10);
    }

    //p2 with ball collision
    if (ball.collide(p2)) {
        ball.x = p2.x - p2.w / 2 - ball.w / 2;
        ball.vx = -ball.vx;
        createParticles(ball.x, ball.y, p2.color);
        startScreenShake(10);
    }

    // Apply screen shake before drawing the objects
    ctx.save();
    applyScreenShake();
    p1.draw();
    p2.draw();
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