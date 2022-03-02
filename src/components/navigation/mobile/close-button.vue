<template>
  <span
    @click="props.handleClick"
    class="mobile-nav-bar__toggle material-icons"
  >
    close
  </span>
</template>

<script setup>
const props = defineProps({
  handleClick: Function,
});
</script>
