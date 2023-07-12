<template>
  <div @mousemove="getCursor($event)" class="wrapper">
    <div id="mousepos" />
    <NuxtLayout name="navbar">
      <NuxtPage class="page"/>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  methods: {
    getCursor(event) {
      const mousepos = document.getElementById("mousepos");
      setTimeout(() => {
        mousepos.style.top = `${event.y}px`;
        mousepos.style.left = `${event.x}px`;
      }, 100);
    },
  },
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
  transform: translateY(0px);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateY(-20px);
}

.wrapper {
  position: absolute;
  top: 80px;
  right: 0px;
  left: 0px;
  bottom: 0px;
}

/* mobile */
@media (max-width: 500px) {
  .wrapper {
    top: 0px;
  }
  #mousepos {
    display: none;
  }
  .page {
    padding-bottom: 100px;
  }
}

#mousepos {
  position: fixed;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at center,
    #0000001f 0%,
    rgba(255, 255, 255, 0) 10%
  );
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

:root.dark #mousepos {
  background: radial-gradient(
    circle at center,
    #ffffff1f 0%,
    rgba(255, 255, 255, 0) 10%
  );
}
</style>
