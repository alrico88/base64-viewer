<template lang="pug">
  img.img-fluid.shadow(:src="url", alt="Resulting image")
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
