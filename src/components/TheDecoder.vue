<template lang="pug">
.row
  .col
    form.form
      .form-group.mb-2
        label Paste the Base64 string:
        textarea.form-control(v-model="text", rows="10")
      .form-group
        button.btn.btn-link.p-0(@click="clearInput", :class="{disabled: text === ''}") Clear field
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from '../store';

const store = useStore();

const {text, clearInput } = toRefs(store);
</script>
