<template lang="pug">
img.img-fluid.shadow(:src="url", alt="Resulting image")
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
})
</script>
