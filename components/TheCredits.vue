<template lang="pug">
hr.my-2
footer.pb-2
  .vstack.gap-2
    .hstack.gap-2.justify-content-between.align-items-center.flex-wrap
      div #[icon(name="bi:person")] Made by #[nuxt-link.ml-1(:to="siteLink", target="_blank") Alberto Rico]
      div #[icon(name="bi:github")] Source code available on #[nuxt-link.ml-1(:to="repoLink", target="_blank") Github]
    div #[icon(name="bx:coffee-togo")] Found it useful? #[nuxt-link(:to="supportLink", target="_blank") Support me]
</template>

<script setup lang="ts">
const siteLink = "http://alrico.es";

const repoLink = "https://github.com/alrico88/base64-viewer";

const supportLink = "https://www.buymeacoffee.com/albertorico";
</script>
