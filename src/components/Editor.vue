<template>
  <pixel-editable
    :value="formattedValue"
    @input="handleInput"
  />
</template>

<script>
import ContentEditable from '@/components/ContentEditable';
import { mapGetters } from 'vuex';

export default {
  components: {
    'pixel-editable': ContentEditable
  },

  props: {
    value: {
      type: String,
      default: ''
    },

    clrs: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    ...mapGetters('programs', [
      'syntaxHighlighting'
    ]),

    formattedValue() {
      return this.value.replace(/\d*([a-z]+)/g, (match, clrCode) => {
        if ({}.hasOwnProperty.call(this.clrs, clrCode)) {
          const clr = this.clrs[clrCode].rgb.map(c => c * 0.75).join(',');
          if (this.syntaxHighlighting) {
            return `<span style="color: rgb(${clr});">${match}</span>`;
          } else {
            return match;
          }
        } else {
          return match.replace(/.{1,5}/g, '<span class="err">$&</span>');
        }
      });
    }
  },

  methods: {
    handleInput(e) {
      const noMarkup = e.replace(/<.+?>/g, '');

      this.$emit('input', noMarkup);
    }
  }
};
</script>

<style lang="scss">
.program-input {
  .err {
    display: inline-block;
    position: relative;

    &:before {
      content: '~~~~~~~~~~';
      font-size: 0.6em;
      font-weight: 700;
      font-family: Times New Roman, Serif;
      color: red;
      width: 100%;
      height: 1em;
      position: absolute;
      top: 1.25em;
      left: -1px;
      overflow: hidden;
    }
  }
}
</style>
