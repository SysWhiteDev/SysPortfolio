<template>
  <div>
    <div class="fullscreen">
      <div class="titlediv fadein">
        <p
          style="
            font-family: 'JetBrains mono';
            font-size: clamp(10px, 15vw, 20px);
          "
        >
          Hi, my name is
        </p>
        <p class="title">SysWhite</p>
        <p style="font-size: clamp(15px, 8vw, 35px)">
          I'm a <u><HomeScrollingWords /></u>
        </p>
      </div>
    </div>
    <div class="projects">
      <p class="prjtitle fadein">&lt;My projects&gt;</p>
      <div class="prjcontainer">
        <div class="prjtile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="prjdata">
            <p class="prjdtitle">ACS Dashboard</p>
            <p class="prjddesc">
              Dashboard for monitoring and analyzing automotive emissions data
              over time for ACS Data Systems S.p.A. 📈💡
            </p>
          </div>
        </div>
        <div class="prjtile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="prjdata">
            <p class="prjdtitle">TrashTracer</p>
            <p class="prjddesc">
              TrashTracer is an ongoing sustainability project utilizing Large
              Format Displays (LFDs) to promote environmental awareness and
              sustainability.
            </p>
          </div>
        </div>
        <div class="prjtile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="prjdata">
            <p class="prjdtitle">bancho.html</p>
            <p class="prjddesc">
              bancho.html aims to be an alternative frontend for bancho.py based
              servers.
            </p>
          </div>
        </div>
        <NuxtLink to="/projects" class="prjmore prjtile fadein">
          <div class="iconwrap">
            <i class="fa-solid fa-plus"></i>
          </div>
          <p>More projects</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const fadeinActive = ref(false);

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  setInterval(() => {
    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => {
      if (isInViewport(element)) {
        fadeinActive.value = true;
        element.classList.add("fadein-active");
      } else {
        // element.classList.remove('fadein-active');
      }
    });
  }, 100);

  const handleScroll = () => {
    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => {
      if (isInViewport(element)) {
        fadeinActive.value = true;
        element.classList.add("fadein-active");
      } else {
        // element.classList.remove('fadein-active');
      }
    });
  };

  const handleVisibilityChange = () => {
    if (!document.hidden) {
      fadeinActive.value = false;
      handleScroll();
    }
  };

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  handleScroll();
});
</script>

<style scoped>
@import url("~/assets/styles/index/index.css");
@import url("~/assets/styles/index/title.css");
@import url("~/assets/styles/index/projects.css");
</style>
