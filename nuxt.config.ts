// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "SysPortfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
  modules: ["@pinia/nuxt"],
});
