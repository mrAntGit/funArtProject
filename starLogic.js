class Star {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.baseSize = random(1, 3);
    this.size = this.baseSize;
    this.twinkleSpeed = random(0.01, 0.05);
    this.brightness = random(100, 255);
    this.twinkleDirection = 1;
    this.oscillationSpeed = random(0.01, 0.02); 
    this.oscillationOffset = random(TWO_PI); 
  }

  update() {
    this.brightness += this.twinkleSpeed * this.twinkleDirection;
    if (this.brightness > 255 || this.brightness < 100) {
      this.twinkleDirection *= -1;
    }

    // Oscillation
    this.size = this.baseSize + sin(millis() * this.oscillationSpeed + this.oscillationOffset);
  }

  draw() {
    fill(this.brightness);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}