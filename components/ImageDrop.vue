<template lang="pug">
.row.vh-100.align-items-center.text-center(@drop.prevent="encode", @dragover.prevent)
  .col(v-if="url !== ''")
    image-result(:url="url")
  .col(v-if="url === ''")
    .row.align-items-center.justify-content-center.h-100.w-100
      .col-6
        p.lead.mb-0.p-5.border-dash.rounded Drag an image here to encode
</template>

<script setup lang="ts">
import { readAsDataURL } from "promise-file-reader";

const props = defineProps<{
  url: string;
}>();

const syncedUrl = useVModel(props, "url");

async function encode(event: DragEvent) {
  const droppedFile = event.dataTransfer?.files;

  if (droppedFile) {
    const [file] = [...droppedFile];
    const asDataURL = await readAsDataURL(file);

    syncedUrl.value = asDataURL;
  }
}
</script>

<style lang="scss" scoped>
.border-dash {
  border: 3px dashed rgba(0, 0, 0, 0.233);
}
</style>
