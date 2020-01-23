class Circle{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/pendulum.png");
        World.add(world, this.body);
      }
      display(){


        if (keyCode === 97 ) {
                var angle = this.body.angle;
                count++;
            this.body.position.x = 50;
            this.body.position.y = 50;
 
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image, 0, 0, this.width, this.height);
                pop();
        }
        else if(keyCode === 100) {
            var angle = this.body.angle;
            count++;
        this.body.position.x = 350;
        this.body.position.y = 50;

            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else {

            var angle = this.body.angle;

            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }


      }
}