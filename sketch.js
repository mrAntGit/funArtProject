let numLines = 700;
let radius = 300;
let angleOffset = 600;
let angleIncrement;
let stars = [];
let spaceman;
let sound;

function preload() {
  spaceman = new Spaceman(
    windowWidth/2,
    windowHeight/2,
    "assTroNaut.png",
    40,
    65
  );
  sound = loadSound("blackHole.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleIncrement = TWO_PI / numLines;
  sound.loop();
  
  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0); // Set background to black
  
  // Draw the spinning ornament
  let ornamentSize = 30;
  let ornamentAngle = millis() * 0.0001; // Control spinning speed
  drawOrnament(0, 0, ornamentSize, ornamentAngle);

  // Draw lines feeding into the ornament
  for (let i = 0; i < numLines; i++) {
    let angle = i * angleIncrement + angleOffset;
    let x1 = radius * cos(angle);
    let y1 = radius * sin(angle);
    let x2 = ornamentSize / 2 * cos(ornamentAngle);
    let y2 = ornamentSize / 2 * sin(ornamentAngle);
    
    stroke(255); // Set line color to white
    line(x1, y1, x2, y2);
  }
  
  angleOffset += 0.01; // Rotate the lines
  
  spaceman.update();
  spaceman.draw();

  for (let star of stars) {
    star.update();
    star.draw();
  }
}

function drawOrnament(x, y, size, angle) {
  push();
  translate(x, y);
  rotate(angle);
  // Draw your ornament shape here
  fill(0);
  ellipse(0, 0, size, size);
  pop();
}
