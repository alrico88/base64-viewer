<template lang="pug">
  #app.container-fluid.bg-smoke
    .row
      .col-8.text-center
        .row.vh-100.align-items-center
          .col(v-if="url !== ''")
            image-result(:url="url")
          .col(v-if="url === ''")
            p.lead
              | Please enter a Base64 string first
      .col-4.bg-white.border-left
        decoder(@text-updated="updateText")
</template>

<script>
import Decoder from './components/Decoder.vue';
import ImageResult from './components/Image.vue';

export default {
  name: 'App',
  components: {
    Decoder,
    ImageResult,
  },
  data() {
    return {
      url: '',
    };
  },
  methods: {
    updateText(value) {
      this.url = `data:image/png;base64, ${value}`;
    },
  },
};
</script>

<style lang="scss">
.bg-smoke {
  background-color: #f4f5f7;
}
</style>
