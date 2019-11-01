<template>
  <canvas
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 400
    },

    size: {
      type: Number,
      default: 20
    },

    frameRate: {
      type: Number,
      default: 14
    }
  },

  data() {
    return {
      context: null,
      nextFunc: null
    };
  },

  mounted() {
    this.context = this.$el.getContext('2d');
    this.context.strokeStyle = '#ababab';
    this.renderPicture(this.size, this.frameRate);
  },

  methods: {
    render(pixels) {
      if (this.nextFunc) {
        clearTimeout(this.nextFunc);
      }

      this.renderPicture(this.size, this.frameRate, pixels);
    },

    /**
     * Renders a picture on the canvas
     *
     * @param size  The number of rows and columns in the grid
     * @param frameRate
     * @param pixels  The colour values for each pixel
     */
    renderPicture(size, frameRate, pixels = null) {
      this.context.clearRect(0, 0, this.width, this.height);
      this.renderGrid(size);

      if (pixels) {
        const pixelSize = this.width / size;
        this.renderNextPixel(pixels, pixelSize, frameRate);
      }
    },

    /**
     * Renders the grid on the canvas
     *
     * @param size  The number of rows and columns in the grid
     */
    renderGrid(size) {
      const pixelSize = this.width / size;

      this.context.beginPath();
      this.context.lineWidth = 0.5;
      for (let i = 0; i <= size; i++) {
        this.context.moveTo(0, i * pixelSize);
        this.context.lineTo(this.width, i * pixelSize);

        this.context.moveTo(i * pixelSize, 0);
        this.context.lineTo(i * pixelSize, this.height);
      }
      this.context.stroke();
    },

    /**
     * Recursively draws all of the pixels on the canvas, with a time delay
     *
     * @param pixels  The pixels to draw
     * @param pixelSize  The height and width of each pixel
     * @param frameRate
     * @param row        The Y position of the next pixel
     * @param col        The X position of the next pixel
     */
    renderNextPixel(pixels, pixelSize, frameRate, row = 0, col = 0) {
      let pixel;

      // Find the next non-null pixel. Null pixels indicate a newline.
      while (pixels.length && !(pixel = pixels.shift())) {
        row++;
        col = 0;
      }

      if (!pixel) {
        return;
      }

      this.renderPixel(pixel, pixelSize, row, col);
      col++;

      // Register the function to draw the pixel after this one
      this.nextFunc = setTimeout(() => {
        this.renderNextPixel(pixels, pixelSize, frameRate, row, col);
      }, 1000 / frameRate);
    },

    /**
     * Draws a pixel on the canvas
     *
     * @param clr   An array of RGB values
     * @param size  The width of the pixel
     * @param row   The Y position of the pixel
     * @param col   The X position of the pixel
     */
    renderPixel(clr, size, row, col) {
      this.context.fillStyle = `rgb(${clr.join(',')})`;
      this.context.fillRect(col * size+0.5, row * size+0.5, size-1, size-1);
    }
  }
};
</script>
