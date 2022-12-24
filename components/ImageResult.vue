<template lang="pug">
img.img-fluid.shadow(:src="url", alt="Resulting image")
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();
</script>
