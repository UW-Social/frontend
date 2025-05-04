<script lang="ts" setup>
import { RouterLink } from 'vue-router'; // Import RouterLink for navigation
</script>

<template>
  <header class="layout-topbar">
    <ul class="layout-topbar-menu">
      <li>
        <RouterLink to="/" class="layout-topbar-logo">
          <img src="../assets/logo.png" alt="Logo" width="60px" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/events">Events</RouterLink>
      </li>
      <li>
        <RouterLink to="/new-event">Publish New</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>

    <div class="layout-topbar-end">
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.layout-topbar {
  display: flex;
  align-items: left;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.layout-topbar-logo {
  display: flex;
  align-items: left;
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
}

.layout-topbar-logo i {
  margin-right: 0.5rem;
}

.layout-topbar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.layout-topbar-menu li {
  margin-left: 1.5rem;
}

.layout-topbar-menu li:first-child {
  margin-left: 0;
}

.layout-topbar-menu a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
</style>
