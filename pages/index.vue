<template>
  <div>
    <div class="fullscreen">
      <div class="titlediv fadein">
        <div class="title-socials">
          <p style="
            font-family: 'JetBrains mono';
            font-size: clamp(10px, 15vw, 20px);
          ">
            Hi, my name is
          </p>
          <div class="socials">
            <a target="_blank" href="https://github.com/SysWhiteDev/" class="social">
              <i class="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://discord.com/invite/gFnwC3EM" class="social">
              <i class="fa-brands fa-discord"></i>
            </a>
            <a target="_blank" href="mailto:syswhite.commercial@gmail.com" class="social">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <p class="title">SysWhite</p>
        <p style="font-size: clamp(15px, 8vw, 35px)">
          I'm a <u>
            <HomeScrollingWords />
          </u>
        </p>
      </div>
    </div>
    <div class="projects">
      <div>
        <p class="title">Discover my journey</p>
        <p class="subtitle">A list of projects and challenges embraced at hackathons.</p>
        <NuxtLink to="/projects" class="button">
          <p>Projects</p>
          <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
        <NuxtLink to="/hackathons" class="button">
          <p>Hackathons</p>
          <i class="fa-solid fa-arrow-right"></i>
        </NuxtLink>
      </div>
      <div class="spacer" />
      <div class="bg-image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const fadeinActive = ref(false);

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top <= windowHeight &&
      rect.left <= windowWidth &&
      rect.bottom >= 0 &&
      rect.right >= 0
    );
  };

  setInterval(() => {
    const fadeinElements = Array.from(
      document.getElementsByClassName("fadein")
    );
    fadeinElements.forEach((element) => {
      if (isInViewport(element)) {
        fadeinActive.value = true;
        element.classList.add("fadein-active");
      } else {
        // fadeinActive.value = false;
        // element.classList.remove("fadein-active");
      }
    });
  }, 100);

  const handleVisibilityChange = () => {
    if (!document.hidden) {
      handleScroll();
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>
@import url("~/assets/styles/index/title.css");
@import url("~/assets/styles/index/projects.css");
@import url("~/assets/styles/index/hackathons.css");
@import url("~/assets/styles/index/index.css");
</style>
