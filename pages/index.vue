<template lang="pug">
root-layout
  template(#sidebar)
    .row
      .col
        form.form
          fieldset.mb-2
            label.form-label(for="image-string") Paste the Base64 string:
            div(:style="inputStyle")
              codemirror(
                id="image-string"
                v-model="text"
                :extensions="[EditorView.lineWrapping]"
                :style="inputStyle"
              )
          .form-group
            .hstack.gap-2
              button.btn.btn-sm.btn-primary(
                @click="download",
                type="button",
                :disabled="btnDisabled"
              ) #[icon(name="bi:download")] Download image
              button.btn.btn-sm.btn-light(
                @click="clearInput",
                type="button",
                :disabled="btnDisabled"
              ) #[icon(name="material-symbols:clear-all")] Clear field
  template(#image)
    image-decoder(:text="text", :url="url")
</template>

<script setup lang="ts">
import { Codemirror } from 'vue-codemirror';
import { EditorView } from 'codemirror';

useSeoMeta({
  title: "Base 64 Image Viewer",
  description: "Online Base64 image viewer",
});

const text = ref("");
const btnDisabled = computed(() => text.value === "");

const url = computed(() => {
  const hasType = text.value.indexOf("base64,") !== -1;
  const processedValue = hasType ? text.value.split("base64,")[1] : text.value;

  return `data:image/png;base64, ${processedValue}`;
});

function clearInput() {
  text.value = "";
}

async function download() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const img = await useImage(url.value);

  ctx.canvas.width = img.width;
  ctx.canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  canvas.toBlob((blob) => {
    if (!blob) {
      console.error("Error converting image to Blob");

      return;
    }

    useDownload(blob, "base64decoded.png");
  });
}

const inputStyle = useInputStyle();
</script>
