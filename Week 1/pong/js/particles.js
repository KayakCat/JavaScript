
class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 4 - 2; // Random horizontal speed
        this.vy = Math.random() * 4 - 2; // Random vertical speed
        this.alpha = 1; // Opacity
        this.color = color;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02; // Fade out over time
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.globalAlpha = 1; // Reset opacity
    }
}