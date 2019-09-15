<template>
  <div class="field">
    <span class="control">
      <a
        v-for="button in buttons"
        class="button icon"
        @click="handleClick(button.action)"
      >
        <i
          class="fas"
          :class="'fa-'+button.icon"
        ></i>
      </a>
    </span>
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
