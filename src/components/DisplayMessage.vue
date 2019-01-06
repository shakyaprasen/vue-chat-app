<template>
  <div class="message-box">
    <ul class="message">
      <template v-for="message in messages">
        <display-message-field
          :key="Math.floor(Math.random() * 100000) + `-` + message.messageText"
          :messageText="message.messageText"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import DisplayMessageField from "./DisplayMessageField.vue";

export default {
  name: "display-message",
  components: {
    DisplayMessageField
  },
  props: {
    messages: {
      type: Array
    }
  }
};
</script>

<style scoped>
.message {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.message li {
  padding: 5px 10px;
}
.message li:hover {
  color: #00c4a7;
  cursor: pointer;
}
.message li:nth-child(even) {
  background: #fafafa;
}
</style>
