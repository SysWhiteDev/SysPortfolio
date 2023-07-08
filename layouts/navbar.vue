<template>
  <div class="navcenter">
    <div class="navwrap">
      <NuxtLink to="/" class="navlogo">S</NuxtLink>
      <div class="links">
        <NuxtLink to="/about" class="link">About me</NuxtLink>
        <NuxtLink to="/projects" class="link">Projects</NuxtLink>
      </div>
      <!-- <i class="fas fa-flag"></i> -->
      <div class="themeChooser" @click="!themeSwitching && changeTheme()">
        <i
          class="fa-regular fa-sun"
          v-if="currentIcon == 'dark'"
          :class="{ themeSwitchOut: themeSwitching }"
        ></i>
        <i
          class="fa-regular fa-moon"
          v-else
          :class="{ themeSwitchOut: themeSwitching }"
        ></i>
      </div>
    </div>
  </div>
  <slot />
</template>

<script>
import { siteSettings } from "../stores/siteSettings";
export default {
  data() {
    return {
      store: siteSettings(),
      themeSwitching: false,
      currentIcon: null,
    };
  },
  mounted() {
    this.htmlElement = document.querySelector("html");
    this.htmlElement.classList.add(this.store.theme);
    this.currentIcon = this.store.theme;
  },
  watch: {
    "store.theme"(newTheme, oldTheme) {
      this.htmlElement.classList.remove(oldTheme);
      this.htmlElement.classList.add(newTheme);
    },
  },
  methods: {
    changeTheme() {
      this.store.changeTheme();
      this.themeSwitching = true;

      setTimeout(() => {
        this.currentIcon = this.store.theme;
        this.themeSwitching = false;
      }, 580);
    },
  },
};
</script>

<style scoped>
@import url("~/assets/styles/navigation/navbar.css");
</style>
