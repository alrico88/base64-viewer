export default defineNuxtConfig({
  extends: ["nuxt-umami"],
  app: {
    head: {
      title: "Base 64 Image Viewer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "msapplication-TileColor", content: "#2d89ef" },
        { name: "theme-color", content: "#ffffff" },
        {
          name: "google-site-verification",
          content: "UZOcaXnekxNx3602Y3bTdmQ76izGiFgKdkMnByPC_PM",
        },
      ],
    },
  },
  css: ["@/assets/main.scss"],
  modules: ["@nuxt/fonts", "nuxt-icon", "@vueuse/nuxt", "@nuxtjs/sitemap"],
  fonts: {
    families: [
      {
        provider: "google",
        name: "Fira Sans",
        weights: [400, 600, 800],
      },
    ],
  },
  routeRules: {
    "/**": {
      static: true,
    },
  },
  site: {
    url: "https://base64-viewer.onrender.com",
  },
  appConfig: {
    umami: {
      host: "https://stats.alrico.es",
      id: "",
      ignoreLocalhost: true,
      version: 2,
    },
  },
});
