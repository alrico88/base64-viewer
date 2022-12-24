export default defineNuxtConfig({
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
  modules: [
    "nuxt-icon",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt",
    "nuxt-simple-sitemap",
  ],
  fontMetrics: {
    fonts: ["Fira Sans"],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/encode"],
    },
  },
  sitemap: {
    hostname: "https://base64-viewer.onrender.com",
  },
});
