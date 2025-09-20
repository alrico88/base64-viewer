<template lang="pug">
hr.my-2
footer.pb-2
  .flex.flex-col.gap-2
    .flex.gap-2.items-center.flex-wrap.justify-between
      div #[icon(name="bi:person")] Made by #[nuxt-link.link.link-primary.ml-1(:to="siteLink", target="_blank") Alberto Rico]
      div #[icon(name="bi:github")] Source code available on #[nuxt-link.link.link-primary.ml-1(:to="repoLink", target="_blank") Github]
    div #[icon(name="bx:coffee-togo")] Found it useful? #[nuxt-link.link.link-primary(:to="supportLink", target="_blank") Support me]
</template>

<script setup lang="ts">
const siteLink = "https://alrico.es";

const repoLink = "https://github.com/alrico88/base64-viewer";

const supportLink = "https://www.buymeacoffee.com/albertorico";
</script>
