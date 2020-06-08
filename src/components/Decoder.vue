<template lang="pug">
  .row
    .col
      form.form
        .form-group.mb-1
          label Paste the Base64 string:
          textarea.form-control(v-model="localText", rows="10")
        .form-group
          a(href="#", @click.prevent="clearInput", :class="{disabled: text === ''}") Clear field
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Decoder',
  computed: {
    ...mapState(['text']),
    localText: {
      get() {
        return this.text;
      },
      set(value) {
        this.changeText(value);
      },
    },
  },
  methods: {
    ...mapMutations(['changeText']),
    clearInput() {
      this.$store.dispatch('clearInput');
    },
  },
};
</script>

<style scoped lang="scss">
.smalltext {
  font-size: 14pt;
}
</style>
