<template lang="pug">
root-layout
  template(#sidebar)
    .row
      .col
        form.form
          .form-group.mb-0
            label.form-label The Base64 for the image is:
            textarea.form-control(v-model="truncatedText", rows="10", readonly, disabled)
            .form-text(v-if="needsTruncate") Text too long. Showing first 500 characters.
            button.btn.btn-sm.btn-primary.mt-2(
              type="button",
              :disabled="btnDisabled",
              @click="() => copy(url)"
            ) #[icon(name="bi:clipboard")] {{ copied ? 'Copied' : 'Copy to clipboard' }}
  template(#image)
    image-drop(v-model:url="url")
</template>

<script setup lang="ts">
import { truncate } from "lodash-es";

useHead({
  title: "Encode Image to Base64",
  meta: [
    {
      name: "description",
      content: "Encode any image to Base 64 online",
    },
    {
      name: "keywords",
      content: "image,base64,png,convert,string",
    },
  ],
});

const url = ref("");

const needsTruncate = computed(() => url.value.length > 500);
const truncatedText = computed(() =>
  truncate(url.value, {
    length: 500,
  }),
);

const { copy, copied } = useClipboard();

const btnDisabled = computed(() => url.value === "" || copied.value);
</script>
