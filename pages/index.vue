<template>
  <div>
    <div class="fullscreen">
      <p class="title">Hi, I am <u>sys</u></p>
      <p class="subtitle">⚡ this website is still being built ⚡</p>
    </div>
  </div>
</template>

<style scoped>
.fullscreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
}

/* if nav on top */
@media (min-width: 500px) {
  .fullscreen {
    height: calc(100vh - 120px);
  }
}

/* title */
.title {
    color: white;
    text-align: center;
    font-size: clamp(60px, 15vw, 120px);
}

.subtitle {
    text-align: center;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.193);
    border-radius: 10px;
    color: white;
    font-size: clamp(15px, 2vw, 30px);
}
</style>

