// The accepted colours for programs and their definitions
const CLRS = {
  b:  {name: 'blue',   rgb: [0,   0,   255]},
  r:  {name: 'red',    rgb: [255, 0,   0]},
  g:  {name: 'green',  rgb: [0,   255, 0]},
  gr: {name: 'grey',   rgb: [80,  80,  80]},
  y:  {name: 'yellow', rgb: [255, 255, 0]},
  pu: {name: 'purple', rgb: [255, 0,   255]},
  o:  {name: 'orange', rgb: [255, 125, 0]},
  c:  {name: 'cyan',   rgb: [0,   255, 255]},
  w:  {name: 'white',  rgb: [255, 255, 255]},
  k:  {name: 'black',  rgb: [0,   0,   0]},
  br: {name: 'brown',  rgb: [125, 80,  0]},
  pi: {name: 'pink',   rgb: [255, 80, 125]}
};

/**
 * Called as soon as the page loads; initializes page content
 */
function main() {
  loadProgram();
  showPalette();

  let drawButton = document.getElementById('drawButton');
  drawButton.addEventListener('click', () => {
    saveProgram();
    prepareDrawing();
  });
}

/**
 * Retrieves the current program
 * 
 * @return  The program that's been entered into the input field
 */
function getProgram() {
  return document.getElementById('program').innerHTML.replace(/<br>/g, '');
}

/**
 * Saves the current program to localStorage
 */
function saveProgram() {
  localStorage.setItem('pixel-drawing', getProgram());
}

/**
 * Loads the last used program from localStorage, if it exists
 */
function loadProgram() {
  const program = localStorage.getItem('pixel-drawing');

  if (program !== null) {
    document.getElementById('program').innerHTML = program;
  }
}

/**
 * Displays the colour information in the palette table
 */
function showPalette() {
  const palette = document.getElementById('palette').querySelector('tbody');

  for (let [clrCode, clrData] of Object.entries(CLRS)) {
    let row   = document.createElement('tr');
    let label = document.createElement('td');
    let code  = document.createElement('td');
    let clr   = document.createElement('td');

    label.innerHTML = clrData.name;
    code.innerHTML = clrCode;
    clr.classList.add('clr-preview');
    let [r, g, b] = clrData.rgb;
    clr.style['background-color'] = `rgb(${r}, ${g}, ${b})`;

    row.appendChild(label);
    row.appendChild(code);
    row.appendChild(clr);
    palette.appendChild(row);
  }
}

main();
