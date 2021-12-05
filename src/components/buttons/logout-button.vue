<template>
  <button class="button button--primary button--compact" @click="logout">
    Log Out
  </button>
</template>

<script>
import { useAuth0 } from "@/services/auth0-plugin";

export default {
  name: "LogoutButton",
  setup() {
    const auth0 = useAuth0();

    const logout = () => {
      if (!auth0) {
        return;
      }

      auth0.logout({
        returnTo: window.location.origin,
      });
    };

    return {
      logout,
    };
  },
};
</script>
