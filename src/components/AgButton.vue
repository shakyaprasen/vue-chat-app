<template>
  <div class="ag-button">
    <button class="button is-primary is-inverted" @click.stop.prevent="$emit('post')">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "ag-button",
  props: {
    name: {
      type: String,
      default: "Send"
    }
  }
};
</script>

<style scoped>
.ag-button {
  display: inline;
}
</style>
