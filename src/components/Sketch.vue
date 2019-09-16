<script>
import SketchBase from '@/components/SketchBase';

export default {
  extends: SketchBase,

  data() {
    return {
      p5: null,
      row: 0,
      col: 0,
      programIndex: 0,
      pixelSize: 0,
      pixels: [],
      size: 0,
      frameRate: 16
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
      };
    },

    draw(p) {
      return () => {
        p.frameRate(this.frameRate);
        this.drawNextPixel(p);
      };
    },

    render(pixels, size, frameRate) {
      this.size = size;
      this.pixels = pixels;
      this.pixelSize = this.width / size;
      this.programIndex = 0;
      this.firstPixel = true;
      this.row = 0;
      this.col = 0;
      this.frameRate = frameRate;

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

      if (!pixel && !this.pixels.length) {
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
};
</script>
