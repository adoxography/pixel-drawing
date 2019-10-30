<template>
  <div>
    <div class="field">
      <div class="control">
        <label
          class="label"
          for="clr-table"
        >
          Available colours
        </label>

        <pixel-clr-table
          id="clr-table"
          :clrs="value.clrs"
        />
      </div>
    </div>

    <div class="field">
      <span class="control">
        <label
          class="label"
          for="size-input"
        >
          Number of pixels
        </label>
        <input
          id="size-input"
          :value="value.size"
          type="number"
          class="input"
          @input="updateSize($event.target.value)"
        >
      </span>
    </div>

    <div class="field">
      <span class="control">
        <label
          class="label"
          for="frame-rate-input"
        >
          Frame Rate
        </label>
        <input
          id="frame-rate-input"
          :value="value.frameRate"
          type="range"
          step="1"
          min="1"
          max="60"
          class="slider"
          @input="updateFrameRate($event.target.value)"
        >
      </span>
    </div>

    <div class="field">
      <span class="control">
        <label class="checkbox">
          <input
            :checked="syntaxHighlighting"
            type="checkbox"
            @input="updateSyntaxHighlighting($event.target.checked)"
          >
          Syntax Highlighting On
        </label>
      </span>
    </div>
  </div>
</template>

<script>
import ClrTable from '@/components/ClrTable';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    'pixel-clr-table': ClrTable,
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {
          size: 0,
          clrs: {},
          frameRate: 0
        };
      }
    }
  },

  computed: {
    ...mapGetters('programs', [
      'syntaxHighlighting'
    ])
  },

  methods: {
    ...mapActions('programs', [
      'updateSyntaxHighlighting'
    ]),

    updateSize(newSize) {
      const value = JSON.parse(JSON.stringify(this.value));
      value.size = newSize;
      this.$emit('input', value);
    },

    updateFrameRate(newFrameRate) {
      const value = JSON.parse(JSON.stringify(this.value));
      value.frameRate = parseInt(newFrameRate);
      this.$emit('input', value);
    }
  }
};
</script>
