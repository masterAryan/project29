class Box {
  constructor(x,y,width,height) {
    var options = {
       
        friction : 10.0,
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
   
  }
  
  display(){
    if(this.body.speed <5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility -5;
      tint(255,this.Visibility);
      pop();
    }
   
   
  }

};