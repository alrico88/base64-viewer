<template lang="pug">
root-layout
  template(#sidebar)
    form.form
      fieldset.fieldset.mb-2
        label.text-base(for="image-url") The Base64 for the image is:
        div(:style="inputStyle")
          codemirror#image-url.input(
            v-model="url",
            :extensions="[EditorView.lineWrapping]",
            :style="inputStyle",
            disabled
          )
      .flex.flex-wrap.gap-2
        button.btn.btn-primary(
          type="button",
          :disabled="btnDisabled || copied",
          @click="() => copy(url)"
        ) #[icon(name="bi:clipboard")] {{ copied ? "Copied" : "Copy to clipboard" }}
        button.btn.btn-secondary(
          type="button",
          :disabled="btnDisabled",
          @click="download"
        ) #[icon(name="bi:download")] Download text
        button.btn(type="button", :disabled="btnDisabled", @click="url = ''") #[icon(name="bi:arrow-clockwise")] Encode another
  template(#image)
    image-drop(v-model:url="url")
</template>

<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { EditorView } from "codemirror";

useSeoMeta({
  title: "Encode Image to Base64",
  description: "Encode any image to Base 64 online",
  keywords: "image,base64,png,convert,string",
});

const url = ref("");

const { copy, copied } = useClipboard();

const btnDisabled = computed(() => url.value === "");

function download() {
  useDownload(new Blob([url.value]), "base64encoded.txt");
}

const inputStyle = useInputStyle();
</script>
