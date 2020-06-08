<template lang="pug">
  #app
    .container-fluid.bg-smoke
      .row
        .col-8.text-center
          router-view(name="image")
        .col-4.bg-white.border-left
          .row
            .col.pt-3
              h2 Base64 viewer
              nav.nav.nav-pills.mb-2
                router-link.nav-item.nav-link(exact-active-class="active", to="/") View
                router-link.nav-item.nav-link(exact-active-class="active", to="/encode") Encode
          router-view(name="sidebar")
          credits
    notifications(group="clipboard")
    router-view
</template>

<script>
import Credits from "./components/Credits.vue";
export default {
  components: {
    Credits,
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/fira-sans.min.css");

body,
html {
  font-family: "Fira Sans" !important;
}

.bg-smoke {
  background-color: #f4f5f7;
}
</style>
