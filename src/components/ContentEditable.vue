<template>
  <div
    contenteditable="true"
    class="program-input textarea"
    @input="handleInput"
    v-html="value"
  />
</template>

<script>
/**
 * Gets the caret position of an element
 *
 * @param el  The element to find the caret position of.
 *            Should be contenteditable.
 * @return  The caret position within the element
 */
const getCaretPositionOf = el => {
  const _range = document.getSelection().getRangeAt(0);
  const range = _range.cloneRange();

  range.selectNodeContents(el);
  range.setEnd(_range.endContainer, _range.endOffset);

  return range.toString().length;
};

/**
 * Sets the caret position of an element
 *
 * @param el   The element to set the caret position of.
 *             Should be contenteditable.
 * @param pos  The position to set the caret to
 */
const setCaretOf = (el, pos) => {
  const sel = document.getSelection();
  const range = getRange(el, pos);

  sel.removeAllRanges();
  sel.addRange(range);
};

/**
 * Gets a Range object corresponding to a given character position within an
 * element
 *
 * @param el   The element to search within
 * @param pos  The character position to look for
 * @return  A Range object
 */
const getRange = (el, pos) => {
  let index = 0;

  for (const node of el.childNodes) {
    const length = node.length || node.innerText.length;

    if (index + length >= pos) {
      if (node.nodeType !== Node.TEXT_NODE) {
        return getRange(node, pos - index);
      }

      return createRange(node, pos - index);
    }

    index += length;
  }
};

/**
 * Initializes a new range object based on a text node and an index
 *
 * @param node   The node to base the range on
 * @param index  The character offset within the node
 * @return  A Range object
 */
const createRange = (node, index) => {
  const range = document.createRange();
  range.setStart(node, index);
  range.collapse(true);
  return range;
};

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleInput(e) {
      const caretPosition = this.getCaretPosition();

      this.$emit('input', e.target.innerHTML);

      this.$nextTick(() => this.setCaret(caretPosition));
    },

    getCaretPosition() {
      return getCaretPositionOf(this.$el);
    },

    setCaret(pos) {
      setCaretOf(this.$el, pos);
    }
  }
};
</script>
