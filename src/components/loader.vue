<template>
  <div class="loader">
    <img :src="loadingImg" alt="Loading..." />
  </div>
</template>

<script>
export default {
  name: "Loader",
  setup() {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";
    return {
      loadingImg,
    };
  },
};
</script>
