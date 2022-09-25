<template lang="pug">
.row
  .col
    form.form
      .form-group.mb-0
        label The Base64 for the image is:
        textarea.form-control(v-model="url", rows="10", readonly, disabled)
        button.btn.btn-sm.btn-primary.mt-2(
          type="button",
          :class="{'disabled': text === ''}"
          @click="() => copy(text)"
        ) {{ copied ? 'Copied' : 'Copy to clipboard' }}
</template>

<script setup>
import { toRefs } from "vue";
import { useStore } from "../store";
import { useClipboard } from '@vueuse/core';

const store = useStore();

const { text, url } = toRefs(store);

const { copy, copied } = useClipboard();
</script>
