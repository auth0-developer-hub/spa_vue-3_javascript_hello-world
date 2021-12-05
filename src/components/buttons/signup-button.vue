<template>
  <button class="button button--primary button--compact" @click="signup">
    Sign Up
  </button>
</template>

<script>
import { useAuth0 } from "@/services/auth0-plugin";

export default {
  name: "SignupButton",
  setup() {
    const auth0 = useAuth0();

    const signup = () => {
      if (!auth0) {
        return;
      }

      auth0.login({ screen_hint: "signup" });
    };

    return {
      signup,
    };
  },
};
</script>
