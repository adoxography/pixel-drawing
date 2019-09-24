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
        class="clr-table-row"
      >
        <td class="clr-table-row-name">
          {{ clr.name }}
        </td>
        <td class="clr-table-row-code">
          {{ code }}
        </td>
        <td
          class="clr-table-row-clr"
          :style="{'background-color': 'rgb('+clr.rgb.join(',')+')'}"
        />
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
