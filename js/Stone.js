class  Stone{
    constructor(x,y){
    
    this.body=Bodies.rectangle(x,y,20,10,{isStatic:false});
    this.width=20;
    this.image=loadImage("images/stone.png")
    this.height=10;
    World.add(world, this.body);
    
    
    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
      imageMode(CENTER);
      push()
      
		translate(pos.x,pos.y);
    rotate(angle);
    fill (255,0,255);
   
    image(this.image, 0,20,10)
    pop ();
    }

  }  
    
    
    
    