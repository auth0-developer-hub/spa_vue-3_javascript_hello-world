<template>
  <div class="page-layout">
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./components/footer.vue";
import NavBar from "./components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "./components/navigation/mobile/mobile-nav-bar.vue";
</script>
