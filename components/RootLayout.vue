<template lang="pug">
.container-fluid.bg-smoke.vh-100
  .row.h-100
    .col-lg-8.col-6.text-center.h-100
      slot(name="image")
    .col-lg-4.col-6.bg-white.border-left.h-100
      .row
        .col.pt-3
          h2 Base64 viewer
          nav.nav.nav-pills.nav-fill.mb-2
            nuxt-link.nav-link(exact-active-class="active", to="/") View image
            nuxt-link.nav-link(exact-active-class="active", to="/encode") Encode image
      slot(name="sidebar")
      the-credits
  </template>
