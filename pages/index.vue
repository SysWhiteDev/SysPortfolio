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
      <div class="socials">
        <a
          target="_blank"
          href="https://github.com/SysWhiteDev/"
          class="social"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://discord.com/invite/gFnwC3EM"
          class="social"
        >
          <i class="fa-brands fa-discord"></i>
        </a>
        <a
          target="_blank"
          href="mailto:syswhite.commercial@gmail.com"
          class="social"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
    <!-- <div class="projects">
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
    <div class="hackathons">
      <p class="haktitle fadein" style="text-align: right;">&lt;hackathons&gt;</p>
      <div class="hakcontainer">
        <div class="haktile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="hakdata">
            <p class="hakdtitle">ACS Dashboard</p>
            <p class="hakddesc">
              Dashboard for monitoring and analyzing automotive emissions data
              over time for ACS Data Systems S.p.A. 📈💡
            </p>
          </div>
        </div>
        <div class="haktile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="hakdata">
            <p class="hakdtitle">TrashTracer</p>
            <p class="hakddesc">
              TrashTracer is an ongoing sustainability project utilizing Large
              Format Displays (LFDs) to promote environmental awareness and
              sustainability.
            </p>
          </div>
        </div>
        <div class="haktile fadein">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/03/13/68/1000_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg"
            alt=""
          />
          <div class="hakdata">
            <p class="hakdtitle">bancho.html</p>
            <p class="hakddesc">
              bancho.html aims to be an alternative frontend for bancho.py based
              servers.
            </p>
          </div>
        </div>
        <NuxtLink to="/hackathons" class="hakmore haktile fadein">
          <div class="iconwrap">
            <i class="fa-solid fa-plus"></i>
          </div>
          <p>More hackathons</p>
        </NuxtLink>
      </div>
    </div> -->
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
