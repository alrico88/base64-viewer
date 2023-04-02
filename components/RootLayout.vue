<template lang="pug">
.container-fluid.bg-smoke
  .row.vh-100
    .col-lg-8.col-6.text-center.h-100
      slot(name="image")
    .col-lg-4.col-6.bg-white.border-left.h-100.overflow-y-auto
      .row
        .col.pt-3
          h2.fw-bolder Base64 viewer
          nav.nav.nav-pills.nav-fill.mb-2
            nuxt-link(v-bind="linkProps", to="/") View image
            nuxt-link(v-bind="linkProps", to="/encode") Encode image
      slot(name="sidebar")
      the-credits
</template>

<script setup lang="ts">
const linkProps = {
  class: "nav-link",
  exactActiveClass: "active",
};
</script>
