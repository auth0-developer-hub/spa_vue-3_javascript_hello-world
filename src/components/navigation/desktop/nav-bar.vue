<template>
  <div class="nav-bar__container">
    <nav class="nav-bar">
      <NavBarBrand />
      <NavBarTabs />
      <NavBarButtons />
    </nav>
  </div>
</template>

<script setup>
import NavBarBrand from "./nav-bar-brand.vue";
import NavBarTabs from "./nav-bar-tabs.vue";
import NavBarButtons from "./nav-bar-buttons.vue";
</script>
