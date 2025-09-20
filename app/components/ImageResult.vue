<template lang="pug">
img.shadow-lg(:src="url", alt="Resulting image")
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
}
</style>
