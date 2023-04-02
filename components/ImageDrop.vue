<template lang="pug">
.d-flex.align-items-center.p-3.h-100.w-100(ref="dropZoneRef")
  template(v-if="imgIsLoaded")
    image-result.mx-auto(:url="url")
  template(v-if="!imgIsLoaded")
    .border-dash.h-100.w-100
      .row.justify-content-center.h-100.align-items-center
        .col-md-6
          .lead.fw-bold {{ isOverDropZone ? 'Drop the image' : 'Drag an image here to encode' }}
</template>

<script setup lang="ts">
import { readAsDataURL } from "promise-file-reader";
import { useDropZone } from "@vueuse/core";

const props = defineProps<{
  url: string;
}>();

const syncedUrl = useVModel(props, "url");

const imgIsLoaded = computed(() => syncedUrl.value !== "");

const dropZoneRef = ref<HTMLDivElement>();

async function onDrop(droppedFile: File[] | null) {
  if (droppedFile) {
    const [file] = [...droppedFile];
    const asDataURL = await readAsDataURL(file);

    syncedUrl.value = asDataURL;
  }
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<style lang="scss" scoped>
.border-dash {
  border: 3px dashed rgba(0, 0, 0, 0.233);
}
</style>
