// The number of cells in the grid (height and width)
const GRID_SIZE = 20;

// The pixels to be drawn
let pixels;

// The current row to draw
let row = 0;

// The current column to draw
let col = 0;

// How wide each pixel will be (calculated based on the GRID_SIZE and width)
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
  pixelSize = width / GRID_SIZE;
  
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
  pixels = parse(getProgram());
  col = 0;
  row = 0;
  clearScreen();
}

/**
 * Empties the screen and draws a blank grid
 */
function clearScreen() {
  background(255);
  for (let i = 0; i <= GRID_SIZE; i++) {
    line(0, i * pixelSize, width, i * pixelSize);
    line(i * pixelSize, 0, i * pixelSize, height);
  }
}

/**
 * Draws the next available pixel
 */
function drawNextPixel() {
  // Don't draw anything if there's nothing left to draw
  if (row >= pixels.length) {
    return;
  }

  // Draw the pixel
  fill(pixels[row][col]);
  rect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);

  // Move the pointers
  col++;
  if (col >= pixels[row].length) {
    col = 0;
    row++;
  }
}

/**
 * Parses a program into a nested array of pixels
 * 
 * @param  A program for drawing pixels
 * @return  An array of arrays containing colours for each pixel
 */
function parse(program) {
  console.log(program);
  return program.trim('\n')
    .split('\n')
    .map(line => line.split(/\s/)
      .reduce((pixels, expr) => {
        let [n, c] = parseExpr(expr);
        return pixels.concat(Array(n).fill(c));
      }, [])
    );
}

/**
 * Parses a single expression from a program
 * 
 * Expressions take the form of [NUMBER][COLOUR CODE], where [NUMBER] is
 * optional. If [NUMBER] is omitted, it is assumed to be 1.
 * 
 * @param expr  The expression to parse
 * @return  An array, where the first element is the number of pixels,
 *          and the second is the colour of the pixels
 */
function parseExpr(expr) {
  let matchData = expr.match(/(\d*)(.+)/);
  let n = parseInt(matchData[1] || 1);
  let c = getClr(matchData[2]);
  return [n, c];
}

/**
 * Translates a colour code into the appropriate p5 color object
 */
const getClr = code => color(...CLRS[code].rgb);
