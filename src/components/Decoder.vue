<template lang="pug">
  .row
    .col
      .row
        .col.pt-3
          h2 Base64 viewer
      .row
        .col
          form.form
            .form-group.mb-0
              label Enter the Base64 string:
              textarea.form-control(v-model="text", rows="10")
      .row
        .col
          hr.my-3
          p.mb-2 Made by
            a.ml-1(href="http://alrico.es", target="_blank") Alberto Rico
          p Source code available on
            a.ml-1(href="https://github.com/alrico88/base64-viewer", target="_blank")
              i.fa.fa-github-square
              |  Github

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
