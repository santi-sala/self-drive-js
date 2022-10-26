class Car{
  // Exercise 1: (Part 2) Adding the parameter image into the class.
  constructor(image, x, y, width, height) {
    this.image = image
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    //Exercise 2: Initial Acceleration = 0.2 --> 0.4
    this.acceleration = 0.4;
    this.maxSpeed = 3;
    //Exercise 3: (Part 1) Maxspeed in reverse
    this.reverseMaxSpeed = this.maxSpeed / 3;
    this.friction = 0.05;
    this.angle = 0

    this.controls = new Controls();

    
  }

  update(){
    this.#move()
  }

  #move() {
    if(this.controls.forward){
      this.speed += this.acceleration;
    }
    if(this.controls.reverse){
      this.speed -= this.acceleration;
    }
    if(this.speed > this.maxSpeed){
      this.speed = this.maxSpeed;
    }

    //Exercise 3: (Part 2) Updating the reverse max speed
    if(this.speed < -this.maxSpeed/2){
      this.speed = -this.reverseMaxSpeed;
    }
    if(this.speed > 0) {
      this.speed -= this.friction;
    }
    if(this.speed < 0) {
      this.speed += this.friction;
    }
    if(Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    if(this.speed != 0) {
     const flip = this.speed > 0 ? 1:-1; 

     if(this.controls.right){
       this.angle -= 0.03 * flip;
      }
      if(this.controls.left){
        this.angle += 0.03 * flip;
      }
    }

    this.x -= Math.sin(this.angle)*this.speed;
    this.y -= Math.cos(this.angle)*this.speed;
    //console.log(this.speed)
  }

  draw(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(-this.angle);

    ctx.beginPath();
    // Exercise 1: (Part 3): Drawing the image into the canvas.
    ctx.drawImage(this.image, -this.width/2, -this.width/2, this.width, this.height);
    // ctx.rect(
    //   -this.width/2,
    //   -this.width/2,
    //   this.width,
    //   this.height
    // );
    ctx.fill();

    ctx.restore();
  }

}