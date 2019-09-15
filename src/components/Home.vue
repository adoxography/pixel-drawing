<template>
  <div>
    <div class="tabs">
      <ul>
        <li>
          <router-link to="code">
            Code
          </router-link>
        </li>
        <li>
          <router-link to="about">
            About
          </router-link>
        <li>
          <router-link to="ref">
            Reference
          </router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
</script>
