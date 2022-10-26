const canvas = document.getElementById("myCanvas");
canvas.width = 400;
const ctx = canvas.getContext("2d");

//Exercise 1: Adding an image size and source (Sorry i used the image from ).
const image = new Image(60, 45); 
image.src = "redCar.png"

const car = new Car(image, 200, 200, 30, 50);

animate();

function animate(){
  car.update();
  canvas.height = window.innerHeight;
  car.draw(ctx);
  requestAnimationFrame(animate);
}