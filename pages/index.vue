<template lang="pug">
root-layout
  template(#sidebar)
    .row
      .col
        form.form
          .form-group.mb-2
            label Paste the Base64 string:
            textarea.form-control(v-model="text", rows="10")
          .form-group
            button.btn.btn-link.p-0(@click="clearInput", :class="{disabled: text === ''}") Clear field
  template(#image)
    image-decoder(:text="text", :url="url")
</template>

<script setup lang="ts">
useHead({
  title: "Base 64 Image Viewer",
  meta: [
    {
      name: "description",
      content: "Online Base64 image viewer",
    },
  ],
});

const text = ref("");

const url = computed(() => {
  const hasType = text.value.indexOf("base64,") !== -1;
  const processedValue = hasType ? text.value.split("base64,")[1] : text.value;

  return `data:image/png;base64, ${processedValue}`;
});

function clearInput() {
  text.value = "";
}
</script>
