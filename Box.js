class Box{

constructor(x,y,width,height){

    this.body=Bodies.rectangle(x,y,width,height,{restitution:0.5})
    World.add(myWorld,this.body);
}

display(){
    rectMode(CENTER);
    var pos = this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
}

}