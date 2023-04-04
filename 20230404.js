let noiseScale = 0.02;
let numPoints = 100;
let margin = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noLoop();
}

function draw() {
  background(255);
  randomSeed(millis());

  let color1 = color(random(360), 70, 100);
  let color2 = color(random(360), 70, 100);
  let color3 = color(random(360), 70, 100);

  for (let y = margin; y < height - margin; y += 10) {
    for (let x = margin; x < width - margin; x += 10) {
      let noiseVal = noise(x * noiseScale, y * noiseScale);
      let c = lerpColor(lerpColor(color1, color2, noiseVal), color3, noiseVal);
      stroke(c);
      drawCurve(x, y, 10, 10);
    }
  }
}

function drawCurve(x, y, w, h) {
  let offsetX = random(-w / 2, w / 2);
  let offsetY = random(-h / 2, h / 2);

  beginShape();
  vertex(x, y);
  bezierVertex(x + w / 2 + offsetX, y - h / 2 + offsetY, x + w / 2 + offsetX, y + h / 2 + offsetY, x + w, y);
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
