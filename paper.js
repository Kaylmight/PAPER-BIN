class Paper{
    constructor(x, y, w, h){
        var option = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, w, option);
           this.radius = w;
            
            World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
  }