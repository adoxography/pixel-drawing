<template>
  <div class="modal is-active">
    <div
      class="modal-background"
      @click="close"
    />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
        <button
          class="delete"
          aria-label="close"
          @click="close"
        />
      </header>

      <section class="modal-card-body">
        <slot />
      </section>

      <footer class="modal-card-foot">
        <slot name="footer">
          <button
            class="button is-danger"
            @click="close"
          >
            Cancel
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },

  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
