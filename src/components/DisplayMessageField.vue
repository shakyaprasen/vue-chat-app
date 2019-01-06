<template>
  <li>{{ messageText }}</li>
</template>

<script>
export default {
  name: "display-message-field",
  props: {
    messageText: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>
