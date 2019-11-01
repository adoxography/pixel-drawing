<template>
  <pixel-editable
    :value="formattedValue"
    @input="handleInput"
  />
</template>

<script>
import ContentEditable from '@/components/ContentEditable';
import { mapGetters } from 'vuex';

const clr2rgb = clr => `rgb(${clr.map(c => c * 0.75).join(',')})`;

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
    ...mapGetters([ 'syntaxHighlighting' ]),

    formattedValue() {
      return this.value.replace(/\d*([a-z]+)/g, (match, clrCode) => {
        if (!{}.hasOwnProperty.call(this.clrs, clrCode)) {
          return match.replace(/.{1,5}/g, '<span class="err">$&</span>');
        }

        if (this.syntaxHighlighting) {
          const clr = this.clrs[clrCode];
          return `<span style="color: ${clr2rgb(clr)};">${match}</span>`;
        }

        return match;
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
