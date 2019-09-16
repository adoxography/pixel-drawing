<template>
  <div>
    <pixel-clr-table :clrs="value.clrs" />
    <div class="field">
      <label
        class="label"
        for="size-input"
      >
        Number of pixels
      </label>
      <input
        id="size-input"
        v-model.number="value.size"
        type="number"
        class="input"
        @input="handleSizeInput($event.target.value)"
      >
    </div>
  </div>
</template>

<script>
import ClrTable from '@/components/ClrTable';

export default {
  components: {
    'pixel-clr-table': ClrTable,
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          size: 20,
          clrs: {}
        };
      }
    }
  },

  methods: {
    handleSizeInput(newSize) {
      const newValue = JSON.parse(JSON.stringify(this.value));
      newValue.size = newSize;
      this.$emit('input', newValue);
    }
  }
};
</script>
