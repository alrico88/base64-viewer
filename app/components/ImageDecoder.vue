<template lang="pug">
.flex.items-center.p-3.h-full.w-full
  template(v-if="imgIsLoaded")
    image-result.mx-auto(:url="url")
  template(v-else)
    .flex.h-full.w-full.items-center.justify-center
      .font-bold.text-lg Please enter a Base64 string first
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  url: string;
}>();

const imgIsLoaded = computed(() => props.text !== "");
</script>
