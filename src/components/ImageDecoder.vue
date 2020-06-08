<template lang="pug">
  .row.vh-100.align-items-center
    .col(v-if="text !== ''")
      image-result(:url="url")
    .col(v-if="text === ''")
      p.lead
        | Please enter a Base64 string first
</template>

<script>
import ImageResult from './ImageResult.vue';
import {mapGetters, mapState} from 'vuex';

export default {
  components: {
    ImageResult,
  },
  computed: {
    ...mapState(['text']),
    ...mapGetters(['url']),
  },
};
</script>

<style>

</style>
