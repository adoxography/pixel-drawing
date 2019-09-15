<template>
  <div class="content" v-html="contents" />
</template>

<script>
import contents from '../../../docs/syntax.md';

export default {
  data() {
    return {
      contents
    };
  }
};
</script>
