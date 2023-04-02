<template lang="pug">
.d-flex.align-items-center.p-3.h-100.w-100
  template(v-if="imgIsLoaded")
    image-result.mx-auto(:url="url")
  template(v-else)
    .row.h-100.w-100.align-items-center.text-center
      .col
        .lead.fw-bold Please enter a Base64 string first
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  url: string;
}>();

const imgIsLoaded = computed(() => props.text !== "");
</script>
