<template>
  <div v-if="auth0 && auth0.isLoading.value" class="page-layout">
    <Loader />
  </div>

  <div v-else class="page-layout">
    <NavBar />
    <div class="page-layout__content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Loader from "@/components/loader.vue";
import NavBar from "@/components/nav-bar.vue";
import { useAuth0 } from "@/services/auth0-plugin";
import { onMounted } from "vue";

export default {
  name: "App",
  components: { Footer, NavBar, Loader },
  setup() {
    const auth0 = useAuth0();

    onMounted(async () => {
      if (!auth0) {
        return;
      }

      await auth0.createClient();
      await auth0.handleCallback();
    });

    return {
      auth0,
    };
  },
};
</script>
