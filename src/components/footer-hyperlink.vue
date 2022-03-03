<template>
  <a
    :href="path"
    class="footer__hyperlink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "FooterHyperlink",
  props: {
    path: String,
  },
};
</script>
