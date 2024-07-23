class gameObject
{
    constructor()
    {
       this.x = c.width/2;
       this.y = c.height/2;
       this.w = 100;
       this.h = 100;
       this.vx = 0;
       this.vy = 0;
       this.color = `#fff`;
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    render()
    {
        ctx.save()
            ctx.translate(this.x, this.y)
            ctx.fillStyle = `#fff`;
            ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);

        ctx.restore()
    }

}