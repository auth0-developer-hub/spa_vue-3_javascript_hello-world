<template>
  <router-link
    @click="props.handleClick"
    :to="props.path"
    exact
    class="mobile-nav-bar__tab"
    active-class="mobile-nav-bar__tab--active"
  >
    {{ props.label }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  path: String,
  label: String,
  handleClick: Function,
});
</script>
