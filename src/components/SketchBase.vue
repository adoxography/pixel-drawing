<template>
  <div
    id="p5-sketch"
    class="p5-sketch"
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
    }
  },

  mounted() {
    import('p5').then(({ default: p5 }) => {
      this.p5 = new p5(this.initP5, 'p5-sketch');
    });
  },

  methods: {
    initP5(p) {
      p.setup = this.setup(p);
      p.draw = this.draw(p);
    }
  }
};
</script>
