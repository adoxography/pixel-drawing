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
      const sel = document.getSelection();
      const range = this.findRange(el, pos);

      sel.removeAllRanges();
      sel.addRange(range);
    },

    findRange(el, pos) {
      let index = 0;

      for (const node of el.childNodes) {
        const length = node.length || node.innerText.length;

        if (index + length >= pos) {
          if (node.nodeType !== Node.TEXT_NODE) {
            return this.findRange(node, pos - index);
          }

          return this.createRange(node, pos - index);
        }

        index += length;
      }
    },

    createRange(node, index) {
      const range = document.createRange();
      range.setStart(node, index);
      range.collapse(true);
      return range;
    }
  }
};
</script>
