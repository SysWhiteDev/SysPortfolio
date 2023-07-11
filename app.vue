<template>
  <div @mousemove="getCursor($event)" class="wrapper">
    <div id="mousepos" />
    <NuxtLayout name="navbar">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  methods: {
    getCursor(event) {
      const mousepos = document.getElementById("mousepos");
      console.log(`X: ${event.x} Y: ${event.y}`);
      mousepos.style.top = `${event.y}px`;
      mousepos.style.left = `${event.x}px`;
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
  top: 100px;
  right: 20px;
  left: 20px;
  bottom: 20px;
}

/* mobile */
@media (max-width: 500px) {
  .wrapper {
    top: 20px;
  }
  #mousepos {
    display: none;
  }
}

#mousepos {
  position: fixed;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at center,
    #d548cf 0%,
    rgba(255, 255, 255, 0) 10%
  );
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>
