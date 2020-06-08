<template lang="pug">
  .row
    .col
      form.form
        .form-group.mb-0
          label The Base64 for the image is:
          textarea.form-control(v-model="url", rows="10", readonly)
          button.btn.btn-sm.btn-primary.mt-2(
            type="button",
            :class="{'disabled': text === ''}"
            href="#",
            v-clipboard:copy="text",
            v-clipboard:success="notifyClipSuccess",
            v-clipboard:error="notifyClipError"
          ) Copy to clipboard
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
  name: 'Decoder',
  computed: {
    ...mapState(['text']),
    ...mapGetters(['url']),
  },
  methods: {
    notifyClipSuccess() {
      this.$notify({
        group: 'clipboard',
        title: 'Success',
        text: 'Copied to clipboard',
        type: 'success',
      });
    },
    notifyClipError(err) {
      this.$notify({
        group: 'clipboard',
        title: 'Error',
        text: `Error copying to clipboard ${err}`,
        type: 'danger',
      });
    },
  },
};
</script>

<style scoped lang="scss">
.smalltext {
  font-size: 14pt;
}
</style>
