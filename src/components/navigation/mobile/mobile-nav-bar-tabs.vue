<template>
  <div class="mobile-nav-bar__tabs">
    <MobileNavBarTab
      path="/profile"
      label="Profile"
      :handle-click="props.closeMenu"
    />
    <MobileNavBarTab
      path="/public"
      label="Public"
      :handle-click="props.closeMenu"
    />
    <template v-if="isAuthenticated">
      <MobileNavBarTab
        path="/protected"
        label="Protected"
        :handle-click="props.closeMenu"
      />
      <MobileNavBarTab
        path="/admin"
        label="Admin"
        :handle-click="props.closeMenu"
      />
    </template>
  </div>
</template>

<script setup>
import MobileNavBarTab from "@/components/navigation/mobile/mobile-nav-bar-tab.vue";
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated } = useAuth0();

const props = defineProps({
  closeMenu: Function,
  openMenu: Function,
});
</script>
