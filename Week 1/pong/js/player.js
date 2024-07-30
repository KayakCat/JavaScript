class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.highScore = 0;
        this.pad = new Box();
        this.w = 20;
        this.h = 150;
        this.x = 0;
        this.y = c.height / 2 - this.h / 2;
        this.pad.vy = 0;
        this.pad.force = 1;
        this.color = 'green';
    }
    
    move() {
        // Update velocity based on acceleration
        this.pad.vy *= fy; // Apply friction
        this.pad.y += this.pad.vy; // Update position based on velocity

        // Ensure pad stays within canvas bounds
        if (this.pad.y < 0 + this.pad.h / 2) {
            this.pad.y = 0 + this.pad.h / 2;
        }
        if (this.pad.y > c.height - this.pad.h / 2) {
            this.pad.y = c.height - this.pad.h / 2;
        }
    }
    
    draw() {
        this.pad.draw();
    }

    left() { return this.pad.x - this.w / 2; }
    right() { return this.pad.x + this.w / 2; }
    top() { return this.pad.y - this.h / 2; }
    bottom() { return this.pad.y + this.h / 2; }
}