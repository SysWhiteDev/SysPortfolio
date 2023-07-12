<template>
  <div>
    <div class="fullscreen">
      <div class="titlediv">
        <p style="font-family: 'Roboto Mono', monospace; font-size: clamp(10px, 15vw, 20px);">Hi, my name is</p>
        <p class="title">SysWhite </p>
        <p style="font-size: clamp(15px, 8vw, 35px);">I'm a <u><HomeScrollingWords/></u></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 40px);
}

/* if nav on top */
@media (min-width: 500px) {
  .fullscreen {
    height: calc(100vh - 120px);
    align-items: center;
  }
}

/* title */

.titlediv > * {
  color: rgb(0, 0, 0);
}

:root.dark .titlediv > * {
  color: rgb(255, 255, 255);
}
.title {
  color: rgb(0, 0, 0);
  text-align: left;
  font-size: clamp(60px, 15vw, 120px);
  font-weight: bold;
}

:root.dark .title {
  color: white;
}
/* subbutton */
.subsection {
  background-color: rgba(0, 0, 0, 0.193);
  border-radius: 10px;
  color: white;
  font-size: clamp(15px, 2vw, 30px);
  padding: 0px 10px 0px 10px;
}

.subbutton {
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  background: none;
  color: rgb(199, 199, 199);
  font-size: clamp(15px, 2vw, 30px);
  outline: none;
  border: none;
  transition: 0.2s all;
}

.subbutton:hover {
  cursor: pointer;
  color: rgb(255, 255, 255);
  padding-right: 15px;
  padding-left: 15px;
}
</style>
