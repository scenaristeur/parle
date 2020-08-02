<template>
  <div class="solid-chat-send">
    <h1>Room name</h1>

    {{ message }}
    <b-input-group class="mt-3">
      <b-form-input v-model="message"></b-form-input>
      <b-input-group-append>
        <!--  <b-button variant="outline-success">Button</b-button>-->
        <b-button variant="info" @click="send">Send</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>

import {namedNode, sioc, dct, foaf } from 'rdf-namespaces'



export default {
  name: 'SolidChatSend',
  components:{
    //solid
  },
  data: function () {
    return {
      message: "d",
      url : "https://parle.solid.community/public/test/lastest.ttl",
      subject: "ola"


    }
  },
  created(){
    this.solid = window.solid
    console.log("SOLID",this.solid)
  },
  methods: {
    async send(){
      // please refer to https://github.com/scenaristeur/shighl/blob/9b4b61d06d8a20f55de3f2aa580cbc5fb840d584/src/Shighl-chat.js#L214
      // and https://github.com/LDflex/LDflex/issues/53
      console.log(this.message)
      var dateObj = new Date();
      var messageId = "#Msg"+dateObj.getTime()
      var date = dateObj.toISOString()
      let msgUrl = this.url+messageId
      await this.solid.data[msgUrl].dct$created.add(date)
      await this.solid.data[msgUrl].sioc$content.add(this.message)
      await this.solid.data[msgUrl].foaf$maker.add(namedNode('https://www.test.com')) // namedNode(`${webid}`)
    //  await solid.data.from(this.url)[messageId]['http://www.w3.org/2005/01/wf/flow#message'].add(this.url)
this.message = ""
      //  await solid.data.from(this.url)[this.subject]['http://www.w3.org/2005/01/wf/flow#message'].add(namedNode(this.url))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
