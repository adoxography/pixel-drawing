// The number of cells in the grid (height and width)
let gridSize = 20;

// The pixels to be drawn
let pixels;

// The current row to draw
let row = 0;

// The current column to draw
let col = 0;

let programIndex = 0;

let parser = new Parser();

// How wide each pixel will be (calculated based on the gridSize and width)
let pixelSize;

/**
 * Initializes any settings that require p5.js
 */
function setup() {
  // Set up the canvas and place it into the DOM
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch');
  
  // Set global p5 settings
  stroke(200);
  frameRate(16);
  
  // Start up the current program
  prepareDrawing();
}

/**
 * Called once per frame
 * 
 * Draws the next pixel
 */
function draw() {
  drawNextPixel();
}

/**
 * Loads in the current program and resets the sketch variables
 */
function prepareDrawing() {
  pixelSize = width / gridSize;
  pixels = parse(getProgram());
  col = 0;
  row = 0;
  programIndex = 0;
  clearScreen();
}

/**
 * Empties the screen and draws a blank grid
 */
function clearScreen() {
  background(255);
  for (let i = 0; i <= gridSize; i++) {
    line(0, i * pixelSize, width, i * pixelSize);
    line(i * pixelSize, 0, i * pixelSize, height);
  }
}

/**
 * Draws the next available pixel
 */
function drawNextPixel() {
  while (programIndex < pixels.length && !pixels[programIndex]) {
    row++;
    col = 0;
    programIndex++;
  }

  if (programIndex >= pixels.length) {
    return;
  }

  fill(pixels[programIndex]);
  rect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
  col++;
  programIndex++;
}

/**
 * Parses a program into a nested array of pixels
 * 
 * @param string  A program for drawing pixels
 * @return  An array of arrays containing colours for each pixel
 */
function parse(string) {
  console.log(string);
  let program = parser.parse(string.replace(/\n/g, ';'));
  return program.toArray();
}

/**
 * Translates a colour code into the appropriate p5 color object
 */
const getClr = code => color(...CLRS[code].rgb);
