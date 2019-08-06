const p5Sketch = Vue.component('p5-sketch', {
  template: `<div class="p5-sketch" id="p5-sketch"></div>`,

  props: {
    width: {default: 400},
    height: {default: 400}
  },

  mounted() {
    this.p5 = new p5(this.initP5, 'p5-sketch');
  },

  methods: {
    initP5(p) {
      p.setup = this.setup(p);
      p.draw = this.draw(p);
    }
  }
});

Vue.component('pixel-sketch', {
  extends: p5Sketch,

  data() {
    return {
      p5: null,
      row: 0,
      col: 0,
      programIndex: 0,
      pixelSize: 0,
      pixels: [],
      size: 0,
      pixelSize: 0
    };
  },

  created() {
    this.pixelSize = this.width / this.size;
  },

  methods: {
    setup(p) {
      return () => {
        p.createCanvas(this.width, this.height);
        p.stroke(200);
        p.frameRate(16);
      };
    },

    draw(p) {
      return () => this.drawNextPixel(p);
    },

    render(pixels, size) {
      this.size = size;
      this.pixels = pixels;
      this.pixelSize = this.width / size;
      this.programIndex = 0;
      this.firstPixel = true;
      this.row = 0;
      this.col = 0;

      this.$forceUpdate();
    },

    clearScreen(p) {
      p.background(255);
      for (let i = 0; i <= this.size; i++) {
        p.line(0, i * this.pixelSize, this.width, i * this.pixelSize);
        p.line(i * this.pixelSize, 0, i * this.pixelSize, this.height);
      }
    },

    drawNextPixel(p) {
      let pixel;

      if (this.firstPixel) {
        this.clearScreen(p);
        this.firstPixel = false;
      }

      // Handle newlines
      while (this.pixels.length && !(pixel = this.pixels.shift())) {
        this.row++;
        this.col = 0;
      }

      if (!this.pixels.length) {
        return;
      }

      p.fill(p.color(...pixel));
      p.rect(
        this.col * this.pixelSize,
        this.row * this.pixelSize,
        this.pixelSize,
        this.pixelSize
      );
      this.col++;
      this.programIndex++;
    }
  }
});

Vue.component('pixel-clr-table', {
  template: `<table class="pixel-clr-table table is-bordered">
  <thead>
    <tr>
      <td>Colour</td>
      <td>Code</td>
      <td>Preview</td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(clr, code) in clrs">
      <td>{{ clr.name }}</td>
      <td>{{ code }}</td>
      <td :style="{'background-color': 'rgb('+clr.rgb.join(',')+')'}"></td>
    </tr>
  </tbody>
</table>`,

  props: ['clrs']
});

new Vue({
  el: '#app',

  data: {
    size: 20,
    parser: new Parser(),
    panelShown: true,
    // The accepted colours for programs and their definitions
    clrs: {
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
    }
  },

  mounted() {
    const program = localStorage.getItem('pixel-drawing');

    if (program !== null) {
      this.$refs.programInput.innerText = program;
    }

    this.render();
  },

  methods: {
    render() {
      let program = this.getProgram();
      let pixels = this.parse(program);
      this.$refs.sketch.render(pixels, this.size);
      this.save(program);
    },

    parse(string) {
      console.log(string);
      let program = this.parser.parse(string);
      return program.toArray().map(c => c ? this.clrs[c].rgb : null);
    },

    save(program) {
      localStorage.setItem('pixel-drawing', program);
    },

    getProgram() {
      return this.$refs.programInput.innerText;
    }
  }
});
