<template lang="pug">
.row.vh-100.align-items-center
  .col(v-if="text !== ''")
    image-result(:url="url")
  .col(v-if="text === ''")
    p.lead Please enter a Base64 string first
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  url: string;
}>();
</script>
