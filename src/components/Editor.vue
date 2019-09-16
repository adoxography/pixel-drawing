<template>
  <div
    contenteditable="true"
    class="program-input textarea"
    @blur="handleInput"
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
