class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/coach.png");
    Matter.Body.setMass(this.body,this.body.mass*20);
  }

};
