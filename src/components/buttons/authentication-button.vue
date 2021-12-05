<template>
  <div>
    <LogoutButton v-if="isAuthenticated" />
    <LoginButton v-else />
  </div>
</template>

<script>
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { useAuth0 } from "@/services/auth0-plugin";
import { computed } from "vue";

export default {
  name: "AuthenticationButton",
  components: { LoginButton, LogoutButton },
  setup() {
    const auth0 = useAuth0();

    const isAuthenticated = computed(() => {
      if (!auth0) {
        return null;
      }

      return auth0.isAuthenticated.value;
    });

    return {
      isAuthenticated,
    };
  },
};
</script>
