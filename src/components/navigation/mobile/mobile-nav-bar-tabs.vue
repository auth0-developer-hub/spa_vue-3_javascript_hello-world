<template>
  <div class="mobile-nav-bar__tabs">
    <MobileNavBarTab
      path="/profile"
      label="Profile"
      :handle-click="props.closeMenu"
    />
    <MobileNavBarTab
      path="/public"
      label="Public"
      :handle-click="props.closeMenu"
    />
    <MobileNavBarTab
      path="/protected"
      label="Protected"
      :handle-click="props.closeMenu"
    />
    <MobileNavBarTab
      path="/admin"
      label="Admin"
      :handle-click="props.closeMenu"
    />
  </div>
</template>

<script setup>
import MobileNavBarTab from "./mobile-nav-bar-tab.vue";

const props = defineProps({
  closeMenu: Function,
  openMenu: Function,
});
</script>

<style scoped></style>
