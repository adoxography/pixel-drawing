<template>
  <div
    contenteditable="true"
    class="program-input textarea"
    @input="handleInput"
    v-html="value"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleInput(e) {
      this.caretPosition = this.getCaretPosition();

      this.$emit('input', e.target.innerHTML);

      this.$nextTick(() => {
        this.setCaret(this.caretPosition);
      });
    },

    getCaretPosition() {
      const el = this.$el;
      const _range = document.getSelection().getRangeAt(0);
      const range = _range.cloneRange();

      range.selectNodeContents(el);
      range.setEnd(_range.endContainer, _range.endOffset);

      return range.toString().length;
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
    }
  }
};
</script>
