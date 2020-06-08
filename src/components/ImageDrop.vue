<template lang="pug">
  .row.vh-100.align-items-center.text-center(@drop.prevent="encode", @dragover.prevent)
    .col(v-if="text !== ''")
      image-result(:url="url")
    .col(v-if="text === ''")
      .row.align-items-center.justify-content-center.h-100.w-100
        .col-6
          p.lead.mb-0.p-5.border-dash.rounded Drag an image here to encode
</template>

<script>
import { readAsDataURL } from "promise-file-reader";
import ImageResult from "@/components/ImageResult.vue";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: {
    ImageResult,
  },
  computed: {
    ...mapState(["text"]),
    ...mapGetters(["url"]),
  },
  methods: {
    ...mapMutations(["changeText"]),
    async encode($event) {
      const droppedFile = $event.dataTransfer.files;
      if (droppedFile) {
        const [file] = [...droppedFile];
        const asDataURL = await readAsDataURL(file);
        this.changeText(asDataURL);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.border-dash {
  border: 3px dashed rgba(0, 0, 0, 0.233);
}
</style>
