class Monster{
    constructor(x,y,width,height){
        var options={
            density:1.0,
            frictionAir:0.03
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Monster1.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       push();
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
       pop();
    }
}