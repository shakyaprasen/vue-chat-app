<template>
  <div class="chat-box container is-fluid">
    <div class="chat-display">
      <display-message v-if="messageLength" :messages="allMessages.messageInfo"/>
    </div>
    <div class="chat-footer">
      <form>
        <input-message-field ref="userMessage"/>
        <ag-button :name="`Send`" ref="agButton" @post="sendMessage"/>
      </form>
    </div>
  </div>
</template>

<script>
import AgButton from "./AgButton.vue";
import DisplayMessage from "./DisplayMessage.vue";
import InputMessageField from "./InputMessageField.vue";

export default {
  name: "chat-box",
  components: {
    AgButton,
    DisplayMessage,
    InputMessageField
  },
  data() {
    return {
      allMessages: {
        messageInfo: []
      }
    };
  },
  sockets: {
    broadcastChatMessage: function(msg) {
      this.allMessages.messageInfo.push(msg);
    }
  },
  methods: {
    sendMessage() {
      const message = this.$refs.userMessage.inputMessage;
      if (!message) return;
      this.$socket.emit("postChatMessage", message);
      this.$refs.userMessage.resetField();
    }
  },
  computed: {
    messageLength() {
      return this.allMessages.messageInfo.length;
    }
  }
};
</script>

<style scoped>
form {
  background: #00c4a7;
  padding: 3px;
  bottom: 0;
}
form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}
.chat-box {
  width: 95%;
  padding: 5px;
  margin-left: 40px;
}
.chat-footer {
  position: fixed;
  bottom: 5px;
  width: inherit;
}
</style>
asd