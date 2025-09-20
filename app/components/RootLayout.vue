<template lang="pug">
.bg-gray-100(class="h-[100vh] dark:bg-slate-700")
  .flex.h-full
    .text-center.h-full(class="w-1/2 lg:w-3/5")
      slot(name="image")
    .bg-white.border-l.border-l-gray-300.h-full.overflow-y-auto.p-4(
      class="w-1/2 lg:w-2/5 dark:bg-slate-600 dark:border-s-gray-600"
    )
      h2.text-3xl.mb-4(class="font-[800]") Base64 viewer
      nav.tabs.tabs-border.mb-4(role="tabbox")
        nuxt-link.tab(v-bind="linkProps", role="tab", to="/") View image
        nuxt-link.tab(v-bind="linkProps", role="tab", to="/encode") Encode image
      slot(name="sidebar")
      the-credits
</template>

<script setup lang="ts">
const linkProps = {
  class: "nav-link",
  exactActiveClass: "active",
};
</script>
