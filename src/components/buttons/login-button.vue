<template>
  <button class="button button--primary button--compact" @click="login">
    Log In
  </button>
</template>

<script>
import { useAuth0 } from "@/services/auth0-plugin";

export default {
  name: "LoginButton",
  setup() {
    const auth0 = useAuth0();

    const login = () => {
      if (!auth0) {
        return;
      }

      auth0.login();
    };

    return {
      login,
    };
  },
};
</script>
