<template>
  <div class="mobile-nav-bar__container">
    <nav class="mobile-nav-bar">
      <MobileNavBarBrand />
      <MenuButton
        v-if="menuStatus === MenuStates.CLOSED"
        :handle-click="openMenu"
      />
      <CloseButton
        v-if="menuStatus === MenuStates.OPEN"
        :handle-click="closeMenu"
      />
      <div v-if="menuStatus === MenuStates.OPEN" class="mobile-nav-bar__menu">
        <MobileNavBarTabs :close-menu="closeMenu" :open-menu="openMenu" />
        <MobileNavBarButtons />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CloseButton from "./close-button.vue";
import MenuButton from "./menu-button.vue";
import MobileNavBarBrand from "./mobile-nav-bar-brand.vue";
import MobileNavBarButtons from "./mobile-nav-bar-buttons.vue";
import MobileNavBarTabs from "./mobile-nav-bar-tabs.vue";

const MenuStates = {
  OPEN: "open",
  CLOSED: "closed",
};

const menuStatus = ref(MenuStates.CLOSED);

const openMenu = () => {
  document.body.classList.add("scroll-lock");
  menuStatus.value = MenuStates.OPEN;
};

const closeMenu = () => {
  document.body.classList.remove("scroll-lock");
  menuStatus.value = MenuStates.CLOSED;
};
</script>
