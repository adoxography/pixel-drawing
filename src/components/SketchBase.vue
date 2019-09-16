<template>
  <div
    id="p5-sketch"
    class="p5-sketch"
  />
</template>

<script>
import p5 from 'p5';

export default {
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    }
  },

  created() {
    console.log('loaded!');
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
};
</script>
