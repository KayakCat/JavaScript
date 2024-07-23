let c = document.querySelector(`canvas`);
let ctx = c.getContext(`2d`);
let fps = 1000/60;
let timer = setInterval(main, fps);


let box = new gameObject;

let keys = []

document.addEventListener(`keydown`,function press (e) {keys[e.key] = true} )


document.addEventListener(`keyup`,function release (e){keys[e.key] = false} )

function main()
{
    ctx.clearRect(0,0,c.width, c.height);

    if (keys[`w`])box.vy += -1
    if (keys[`s`])box.vy += 1

    box.vx *= .9
    box.vy *= .9

    box.move()
    box.render()
    
}

function rand(low, high)
{
    return Math.random() * (high - low) + low
}

