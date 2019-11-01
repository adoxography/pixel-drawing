<template>
  <div class="clr-table">
    <span
      v-for="(clr, code) in clrs"
      :key="code"
      :style="{border: '10px solid rgb('+clr.join(',')+')'}"
    >
      {{ code }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    clrs: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
.clr-table {
  display: flex;
  flex-wrap: wrap;
  width: 9em;

  span {
    width: 3em;
    text-align: center;
    cursor: default;
  }
}
</style>
