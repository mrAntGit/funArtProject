class Spaceman {
  constructor(x, y, imgPath, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = loadImage(imgPath);

    this.angle = 0;
    this.xSpeed = random(-0.5, 0.5);
    this.ySpeed = random(-0.5, 0.5);
    this.angleSpeed = random(-0.01, 0.01);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    // bounce
    if (this.x < 0 || this.x > windowWidth - this.width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > windowHeight - this.height) {
      this.ySpeed *= -1;
    }

    this.angle += this.angleSpeed;
  }

  draw() {
    push();
    translate(this.x + this.width / 2, this.y + this.height / 2);
    imageMode(CENTER);
    image(this.img, 0, 0, this.width, this.height);
    pop();
  }
}