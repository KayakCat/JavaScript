
//*******************************VARIABLE SECTION*************************

//canvas and context
var c = document.querySelector(`#pong`);
var ctx = c.getContext(`2d`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000 / 60);

//global friction variable
var fy = .97;
const originalSpeed = {vx: -2, vy: -2}//set the original speed of the ball
const players = [new Player("Player 1"), new Player("Player 2")];//players array

const pad = [new Box(), new Box()]; //paddle array

let hitCount = 0;//variable for the hit count for increase ball speed function
let scores = [0,0] //score array for players 1 and 2

const scoreBoard = document.querySelectorAll("#score > div")

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
pad[1].dir = -1
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


//*********************************MAIN PROGRAM********************************
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


    // Apply screen shake before drawing the objects - cleanup??? ask jay
    ctx.save();
    applyScreenShake();
    ball.draw();
    ctx.restore();

    for (let i = 0; i < scoreBoard.length; i++) {
        pad[i].vy *= fy;
        pad[i].move();
        if (pad[i].y < 0 + pad[i].h / 2) {
            pad[i].y = 0 + pad[i].h / 2;
        }
        if (pad[i].y > c.height - pad[i].h / 2) {
            pad[i].y = c.height - pad[i].h / 2;
        }

        if (ball.collide(pad[i])) {
            ball.x = pad[i].x + (pad[i].w / 2 + ball.w / 2) * pad[i].dir;
            ball.vx = -ball.vx;
            createParticles(ball.x, ball.y, pad[i].color);//particles fly out on impact with paddle
            startScreenShake(10); //screen shake when ball makes impact with paddle
            if (hitCount % 10 === 0) { // Every 10 hits the ball will move faster
                increaseBallSpeed();
            }
    
        }
        pad[i].draw();
        scoreBoard[i].innerText = scores[i];

    }

    

} 
//******************************FUNCTIONS*******************************************
// Function to get a random color - haven't used this yet but really want to!!!
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

function resetBallSpeed() { //reset ball speed when the ball hits the canvas
    ball.vx = originalSpeed.vx;
    ball.vy = originalSpeed.vy;

    }


