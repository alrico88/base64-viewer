<template lang="pug">
root-layout
  template(#sidebar)
    .row
      .col
        form.form
          fieldset.mb-2
            label.form-label(for="image-url") The Base64 for the image is:
            div(:style="inputStyle")
              codemirror(
                id="image-url"
                v-model="url"
                :extensions="[EditorView.lineWrapping]"
                :style="inputStyle"
                disabled
              )
          .hstack.gap-2
            button.btn.btn-sm.btn-primary(
              type="button",
              :disabled="btnDisabled || copied",
              @click="() => copy(url)"
            ) #[icon(name="bi:clipboard")] {{ copied ? 'Copied' : 'Copy to clipboard' }}
            button.btn.btn-sm.btn-light(
              type="button",
              :disabled="btnDisabled",
              @click="download"
            ) #[icon(name="bi:download")] Download text
  template(#image)
    image-drop(v-model:url="url")
</template>

<script setup lang="ts">
import { Codemirror } from 'vue-codemirror';
import { EditorView } from 'codemirror';

useSeoMeta({
  title: "Encode Image to Base64",
  description: "Encode any image to Base 64 online",
  keywords: "image,base64,png,convert,string"
});

const url = ref("");

const { copy, copied } = useClipboard();

const btnDisabled = computed(() => url.value === "");

function download() {
  useDownload(new Blob([url.value]), "base64encoded.txt");
}

const inputStyle = useInputStyle();
</script>
