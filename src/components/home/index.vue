<template>
  <div class="home-component">
    <div class="tabs is-boxed">
      <ul>
        <li :class="{ 'is-active': isCodeRoute }">
          <router-link to="code">
            Code
          </router-link>
        </li>
        <li :class="{ 'is-active': isAboutRoute }">
          <router-link to="about">
            About
          </router-link>
        </li>
        <li :class="{ 'is-active': isReferenceRoute }">
          <router-link to="ref">
            Reference
          </router-link>
        </li>
      </ul>
    </div>

    <div class="box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      return this.$route.path;
    },

    isCodeRoute() {
      return this.path === '/' || this.path === '/code';
    },

    isAboutRoute() {
      return this.path === '/about';
    },

    isReferenceRoute() {
      return this.path === '/ref';
    }
  }
};
</script>

<style lang="scss">
.home-component {
  .tabs {
    margin-bottom: 0 !important;
    padding-left: 2em;
  }
}
</style>
