<template>
  <div class="field toolbar is-pulled-right">
    <a
      v-for="(button, index) in buttons"
      :key="index"
      :title="button.title"
      class="button icon is-medium"
      @click="handleClick(button.action)"
      >
      <i
        class="fas"
        :class="'fa-'+button.icon"
      ></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleClick(action) {
      action.call();
    }
  }
};
</script>

<style lang="scss">
.toolbar {
  a:not(:first-child) {
    margin-left: .2em;
  }
}
</style>
