import { defineStore } from "pinia";


export const siteSettings = defineStore("siteSettings", {
  state: () => ({
    theme: "light",
  }),
  actions: {
    changeTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
});
