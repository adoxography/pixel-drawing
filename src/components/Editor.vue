<template>
  <div
    contenteditable="true"
    class="program-input textarea"
    @input="handleInput"
    v-html="formattedValue"
  />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
      const noMarkup = e.target.innerHTML.replace(/<.+?>/g, '');
      const position = this.getCaretPosition();

      this.$emit('input', noMarkup);

      this.$nextTick(() => {
        this.setCaret(position);
      });
    },

    setStartOfRange(range, el, pos) {
      let index = 0;

      for (const node of el.childNodes) {
        const length = node.length || node.innerText.length;
        if (index + length > pos) {
          if (node.nodeType === Node.TEXT_NODE) {
            range.setStart(node, pos - index);
          } else {
            this.setStartOfRange(range, node, pos - index);
          }

          break;
        }

        index+= length;
      }
    },

    setCaret(pos) {
      const el = this.$el;
      const range = document.createRange();
      const sel = document.getSelection();

      this.setStartOfRange(range, el, pos);

      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    },

    getCaretPosition() {
      const el = this.$el;
      const _range = document.getSelection().getRangeAt(0);
      const range = _range.cloneRange();
      
      range.selectNodeContents(el);
      range.setEnd(_range.endContainer, _range.endOffset);
      
      return range.toString().length;
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
