<template>
  <span
    @click="props.handleClick"
    class="mobile-nav-bar__toggle material-icons"
  >
    menu
  </span>
</template>

<script setup>
const props = defineProps({
  handleClick: Function,
});
</script>
