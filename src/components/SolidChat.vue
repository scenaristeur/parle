<template>
  <div class="chat">
    <BreadCrumb />

    <!--    <SolidChatRooms :root="this.base" :index="this.index" /> -->
    <SolidChatList />
    <SolidChatSend />
  </div>
</template>

<script>
import store from '@/store'
import ChatMixin from '@/mixins/ChatMixin' // manage Chat functionnalities

import SolidChatSend from '@/components/SolidChatSend.vue'
//import SolidChatRooms from '@/components/SolidChatRooms.vue'
import SolidChatList from '@/components/SolidChatList.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  store,
  name: 'SolidChat',
  mixins: [ ChatMixin],
  components: {
    SolidChatSend,
    //  SolidChatRooms,
    SolidChatList,
    BreadCrumb
  },
  props: {
    root: String,
  },
  async  created() {
        await this.fixRoot(this.root)
    console.log("ROOT FROM STORE", this.$store.state.chat.root)

  },

}
</script>
