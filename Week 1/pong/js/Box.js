class Box {
    // The constructor initializes the Box's properties
    constructor() {
        // Set initial position to the center of the canvas
        this.x = c.width / 2;
        this.y = c.height / 2;
        // Set width and height of the box
        this.w = 100;
        this.h = 100;
        // Set the box's color
        this.color = `yellowgreen`;
        // Initialize velocity in the x and y directions
        this.vx = 0;
        this.vy = 0;
        // Define the force that can be applied to the box
        this.force = 1;
    }

    // Draw the box on the canvas
    draw() {
        // Save the current state of the canvas
        ctx.save();
        // Translate the canvas origin to the box's position
        ctx.translate(this.x, this.y);
        // Set the fill color for the box
        ctx.fillStyle = this.color;
        // Draw the box centered around the origin
        ctx.fillRect(0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
        // Restore the canvas to its original state
        ctx.restore();
    }

    // Update the box's position based on its velocity
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // Return the left edge of the box
    left() { return this.x - this.w / 2; }
    // Return the right edge of the box
    right() { return this.x + this.w / 2; }
    // Return the top edge of the box
    top() { return this.y - this.h / 2; }
    // Return the bottom edge of the box
    bottom() { return this.y + this.h / 2; }

    // Check for collision with another object
    collide(obj) {
        // If any of these conditions are true, there is no collision
        if (
            this.right() > obj.left() &&
            this.left() < obj.right() &&
            this.bottom() > obj.top() &&
            this.top() < obj.bottom()
        ) {
            return true; // Collision detected
        }
        return false; // No collision
    }
}