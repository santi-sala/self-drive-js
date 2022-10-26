const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width * 0.9);

//Exercise 1: Adding an image size and source (Sorry i used the image from ).
const image = new Image(60, 45); 
image.src = "redCar.png"
const car = new Car(image, 100, 100, 30, 50);

animate();

function animate(){
  car.update();
  canvas.height = window.innerHeight;

  road.draw(ctx)
  
  car.draw(ctx);
  requestAnimationFrame(animate);
}