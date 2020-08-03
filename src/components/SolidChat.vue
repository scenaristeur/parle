<template>
  <div class="chat">
    <SolidLogin />
    <!--    <SolidChatRooms :root="this.base" :index="this.index" /> -->
    <SolidChatList />
    <SolidChatSend />
  </div>
</template>

<script>
import store from '@/store'
import ChatMixin from '@/mixins/ChatMixin' // manage Chat functionnalities
import WebSocketMixin from '@/mixins/WebSocketMixin' // manage WebSocket
import BrowserMixin from '@/mixins/BrowserMixin' // Manage folders & files

import SolidChatSend from '@/components/SolidChatSend.vue'
//import SolidChatRooms from '@/components/SolidChatRooms.vue'
import SolidLogin from '@/components/SolidLogin.vue'
import SolidChatList from '@/components/SolidChatList.vue'

export default {
  store,
  name: 'SolidChat',
  mixins: [ ChatMixin, WebSocketMixin , BrowserMixin],
  components: {
    SolidChatSend,
    //  SolidChatRooms,
    SolidLogin,
    SolidChatList
  },
  props: {
    root: String,
  },
  async  created() {
        await this.fixRoot(this.root)
    console.log("ROOT FROM STORE", this.$store.state.chat.root)
    await this.createWebSocket()
    let socket = this.$store.state.websocket.socket
    console.log("SOCKET FROM STORE", socket)
    socket.onmessage = function(msg) {
      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        // resource updated, refetch resource
        console.log("updated",msg.data)
        //  this.history.push({type: "update", url: msg.data})
        //  this.$store.dispatch('chat/requestUpdate',msg.data.substring(4))
        this.getMessages(msg.data.substring(4))
      }
    }.bind(this)
  },

}
</script>
