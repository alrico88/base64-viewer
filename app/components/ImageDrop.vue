<template lang="pug">
.flex.items-center.p-3.h-full.w-full(ref="dropZoneRef")
  template(v-if="imgIsLoaded")
    image-result.mx-auto(:url="url")
  template(v-if="!imgIsLoaded")
    .border-dash.h-full.w-full(@click="openFileDialog")
      .flex.justify-center.h-full.items-center
        input.hidden(
          aria-hidden,
          type="file",
          ref="inputRef",
          @change="onFileChange",
          accept="image/*"
        )
        .text-lg.font-bold {{ placeholderText }}
</template>

<script setup lang="ts">
import { readAsDataURL } from "promise-file-reader";
import { useDropZone } from "@vueuse/core";
import is from "@sindresorhus/is";

const url = defineModel("url");

const imgIsLoaded = computed(() =>
  is.nonEmptyStringAndNotWhitespace(url.value),
);

const dropZoneRef = ref<HTMLDivElement>();

async function onDrop(droppedFile: File[] | null) {
  if (is.nonEmptyArray(droppedFile)) {
    const [file] = droppedFile;

    console.log(file);

    url.value = await readAsDataURL(file);
  }
}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);

const inputRef = ref<HTMLInputElement>();

function openFileDialog() {
  inputRef.value?.click();
}

async function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files;

  const filesArray = Array.from(files as FileList);

  if (is.nonEmptyArray(filesArray)) {
    await onDrop(filesArray);
    target.value = "";
  }
}

const placeholderText = computed(() => {
  return isOverDropZone.value
    ? "Drop the image"
    : "Drag an image here to encode or click here to load a file";
});
</script>

<style lang="scss" scoped>
.border-dash {
  border: 3px dashed rgba(0, 0, 0, 0.233);
}
</style>
