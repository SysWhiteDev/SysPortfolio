<template>
  <div>
    <div class="title">
      <p>My projects</p>
    </div>
    <div class="searchbar">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="projects-wrapper">
      <div class="nodata">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p>Projects are not available yet</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/styles/projects/title.css");
@import url("~/assets/styles/projects/searchbar.css");
@import url("~/assets/styles/projects/projects.css");
</style>
