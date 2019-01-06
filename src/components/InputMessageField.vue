<template>
  <div class="input-box">
    <input class="input is-success" autocomplete="off" v-model="inputMessage">
  </div>
</template>

<script>
export default {
  name: "input-message-field",
  data() {
    return {
      inputMessage: ""
    };
  },
  methods: {
    resetField() {
      this.inputMessage = "";
    }
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  border: 0;
  width: 90%;
  margin-right: 0.5%;
}
.input-box {
  display: inline;
}
</style>
