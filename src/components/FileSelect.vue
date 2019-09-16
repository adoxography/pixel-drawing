<template>
  <Modal
    ref="modal"
    title="Choose a file"
    @close="close"
  >
    <div class="select">
      <select v-model="selection">
        <option
          v-for="option in options"
          :key="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <template v-slot:footer>
      <button
        class="button is-success"
        @click="load"
      >
        Load
      </button>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  components: { Modal },

  props: {
    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      selection: ''
    };
  },

  methods: {
    load() {
      this.$emit('input', this.selection);
    },

    close() {
      this.$emit('close');
    }
  }
};
</script>
