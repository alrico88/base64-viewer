<template lang="pug">
.row.vh-100.align-items-center
  .col(v-if="text !== ''")
    image-result(:url="url")
  .col(v-if="text === ''")
    p.lead Please enter a Base64 string first
</template>

<script setup>
import { toRefs } from "vue";
import { useStore } from "../store";
import ImageResult from "./ImageResult.vue";
const store = useStore();

const { text, url } = toRefs(store);
</script>
