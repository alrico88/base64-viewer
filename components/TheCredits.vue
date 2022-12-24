<template lang="pug">
.row
  .col
    hr.my-2
    .hstack.gap-2.justify-content-between.align-items-center
      div #[icon(name="bi:person")] Made by #[nuxt-link.ml-1(:to="siteLink", target="_blank") Alberto Rico]
      div #[icon(name="bi:github")] Source code available on #[nuxt-link.ml-1(:to="repoLink", target="_blank") Github]
</template>

<script setup lang="ts">
const siteLink = "http://alrico.es";

const repoLink = "https://github.com/alrico88/base64-viewer";
</script>
