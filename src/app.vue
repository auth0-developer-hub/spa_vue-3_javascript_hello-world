<template>
  <div v-if="isLoading" class="page-layout">
    <Loader />
  </div>
  <div v-else class="page-layout">
    <NavBar />
    <MobileNavBar />
    <div class="page-layout__content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/footer.vue";
import Loader from "@/components/loader.vue";
import NavBar from "@/components/navigation/desktop/nav-bar.vue";
import MobileNavBar from "@/components/navigation/mobile/mobile-nav-bar.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isLoading } = useAuth0();
</script>
