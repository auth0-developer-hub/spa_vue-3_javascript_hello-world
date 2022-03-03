<template>
  <div>
    <HeroBanner></HeroBanner>
    <Auth0Features></Auth0Features>
  </div>
</template>

<script>
import HeroBanner from "@/components/hero-banner.vue";
import Auth0Features from "@/components/auth0-features.vue";

export default {
  name: "Home",
  components: { Auth0Features, HeroBanner },
};
</script>
