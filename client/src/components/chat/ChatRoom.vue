<script setup>
import { ref } from 'vue'
import { io } from 'socket.io-client'

const id = ref('')

const socket = io('http://localhost:3000')
socket.on('connect', () => {
  console.log(`You connected with id : ${socket.id}`)
  id.value = socket.id
})

socket.on('receive-message-general', message => {
  messages.value.push(message)
})

const message = ref('')
const messages = ref([])
</script>

<template>
  <section>
    <h3>Chat Room -- ID : {{ id }}</h3>
    <div class="messages">
      <p v-for="message, index in messages" :key="index">{{ message }}</p>
    </div>
    <form class="message" @submit.prevent="sendMessageGeneral">
      <label for="message">Message</label>
      <input type="text" id="message" v-model="message">
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<style scoped>
section {
  flex-grow: 2;
  display: flex;
    flex-direction: column;
    gap: 10px;
  background-color: black;
  color: white;
  padding: 20px;
}
h3 {
  font-size: 15px;

}
.messages {
  display: flex;
    flex-direction: column;
  border: 2px solid white;
  width: 400px;
  aspect-ratio: 1 / 1;
  overflow-y: scroll;
}
.messages > p {
  margin: 0;
  padding: 10px 0;
  text-align: center;
}
.messages > p:nth-child(1n) {
  background-color: lightcyan;
}
.messages > p:nth-child(2n) {
  background-color: lightgray;
}
input {
  width: 150px;
}


.message {
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  height: 50px;
  border: 2px solid white;
  padding: 10px;
}

.message > button {
  border: 2px solid white;
  padding: 10px;
  color: white;
  cursor: pointer;
}
</style>