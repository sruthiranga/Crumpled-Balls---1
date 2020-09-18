class Dustbin{
    constructor( x, y, width, height){
        var options = {
            isStatic:true
        }    
    this.trash = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.trash);     
    }

    display(){
        var pos = this.trash.position;
        push();
        fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }


}