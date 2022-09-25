<template lang="pug">
.container-fluid.bg-smoke
  .row
    .col-lg-8.col-6.text-center
      router-view(name="image")
    .col-lg-4.col-6.bg-white.border-left
      .row
        .col.pt-3
          h2 Base64 viewer
          nav.nav.nav-pills.nav-fill.mb-2
            router-link.nav-link(exact-active-class="active", to="/") View image
            router-link.nav-link(exact-active-class="active", to="/encode") Encode image
      router-view(name="sidebar")
      the-credits
router-view
</template>

<script setup>
import TheCredits from "./components/TheCredits.vue";
</script>
