<script setup>
import { ref } from 'vue'
import { io } from 'socket.io-client'

const name = ref(null)


const socket = io('http://localhost:3000')
socket.on('connect', () => {
  console.log(`You connected with id : ${socket.id}`)
})

socket.on('receive-message-general', message => {
  messages.value.push({
    _id: messages.value.length + 1,
    content: message.content,
    owner: message.owner
  })
})

const message = ref('')
const messages = ref([])

function sendMessageGeneral() {
  console.log(name.value.value)
  if (message.value === '') return
  socket.emit('send-message-general', message.value, name.value.value)
  messages.value.push({
    _id: messages.value.length + 1,
    content: message.value,
    owner: name.value.value
  })
  message.value = ''
}
</script>

<template>
  <section>
    <p v-if="$store.state.connected == false" class="error">
      You must be connected to send a message
    </p>
    <h3>General Chat</h3>
    <div class="messages">
      <p v-for="message in messages" :key="message._id"
        :class="{own: message.owner == $store.state.name}">
        <span>
          <span class="circle"></span>
          <span>{{ message.owner }}</span>
        </span>
        <span>{{ message.content }}</span>
      </p>
    </div>
    <form class="message" @submit.prevent="sendMessageGeneral">
      <input type="text" id="message" v-model="message">
      <button v-if="$store.state.connected == false" class="disabled" disabled>Seznd</button>
      <button v-if="$store.state.connected" type="submit">Send</button>
      <input type="hidden" ref="name" :value="$store.state.name">
    </form>
  </section>
</template>

<style scoped>
.own {
  background-color: coral !important;
}

.disabled {
  background-color: lightgray;
  cursor: not-allowed !important;
}
.error {
  background-color: red;
  padding: 10px;
  color: white;
  border-radius: 5px;
}
.circle {
  display: block;
  width: 45px; 
  height: 45px;
  border-radius: 100px;
  background-color: lightgray;
}

section {
  display: flex;
    flex-direction: column;
    gap: 10px;
  background-color: ghostwhite;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  padding: 20px;
  width: 75vw;
}
.messages {
  align-self: center;
  display: flex;
    flex-direction: column;
  border: 1px solid black;
  width: 90%;
  height: 400px;
  overflow-y: scroll;
}
.messages > p {
  background-color: ghostwhite;
  border-bottom: 1px solid darkgray;
  margin: 0;
  padding: 10px 0;
  display: flex;
    align-items: center;
  padding: 15px 10px;
}
.messages > p > span:first-child {
  display: flex;
    align-items: center;
    gap: 10px;
}
.messages > p > span:last-child {
  margin: 0 auto;
}


.message {
  display: flex;
    align-items: center;
    gap: 10px;
  height: 50px;
  background: darkgray;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}

input {
  flex-grow: 1;
}

.message > button {
  border: 1px solid black;
  background: ghostwhite;
  border-radius: 3px;
  padding: 10px;
  color: black;
  cursor: pointer;
  width: 100px;
  transition: 0.25s;
}

.message > button:hover {
  background: darkgray;
  color: ghostwhite;
}
</style>