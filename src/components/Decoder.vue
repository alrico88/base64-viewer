<template lang="pug">
  .row
    .col.pt-3
      h2
        | Base64 viewer
        span.smalltext.ml-2
          | By Alberto Rico
          a.ml-2(href="https://github.com/alrico88/base64-viewer", target="_blank")
            i.fa.fa-github-square
    .w-100
    .col
      form.form
        .form-group
          label Enter the Base64 string:
          textarea.form-control(v-model="text", rows="10")

</template>

<script>
export default {
  name: 'Decoder',
  data() {
    return {
      text: '',
    };
  },
  watch: {
    text(value) {
      const hasType = value.indexOf('base64,') !== -1;
      const valueToSend = hasType ? value.split('base64,')[1] : value;
      this.$emit('text-updated', valueToSend);
    },
  },
};
</script>

<style scoped lang="scss">
.smalltext {
  font-size: 14pt;
}
</style>
