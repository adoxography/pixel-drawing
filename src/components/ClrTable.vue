<template>
  <table class="pixel-clr-table table is-bordered">
    <thead>
      <tr>
        <td>Colour</td>
        <td>Code</td>
        <td>Preview</td>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(clr, code) in clrs"
        :key="code"
      >
        <td>{{ clr.name }}</td>
        <td>{{ code }}</td>
        <td :style="{'background-color': 'rgb('+clr.rgb.join(',')+')'}" />
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    clrs: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
