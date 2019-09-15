<template>
  <div
    contenteditable="true"
    @blur="handleInput"
    class="program-input textarea"
    v-text="value"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.innerText);
    }
  }
};
</script>
