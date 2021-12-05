<template>
  <App />
</template>

<script>
import App from "./app.vue";
import { provideAuth0 } from "./services/auth0-plugin";

export default {
  name: "Shell",
  components: { App },
  setup() {
    provideAuth0();
  },
};
</script>
