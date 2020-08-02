<template>
  <div class="solid-chat-send">
    <!--<h1>Room name</h1> -->


    <b-input-group class="mt-3">
      <b-form-input v-model="message"></b-form-input>
      <b-input-group-append>
        <!--  <b-button variant="outline-success">Button</b-button>-->
        <b-button variant="info" @click="send">Send</b-button>
      </b-input-group-append>
    </b-input-group>

    <a v-bind:href="index" target="_blank">where is the data</a>
    <br>
    <a href="https://github.com/scenaristeur/parle" target="_blank">source</a>
  </div>
</template>

<script>
import { fetchDocument } from 'tripledoc';
import {namedNode, sioc, dct, foaf } from 'rdf-namespaces'



export default {
  name: 'SolidChatSend',
  components:{
    //solid
  },
  props: [
    'index'
  ],
  data: function () {
    return {
      message: "",
      //    index : "https://parle.solid.community/public/test/lastest.ttl",
      //  subject: "ola"


    }
  },

  methods: {
    async send(){
      // please refer to https://github.com/scenaristeur/shighl/blob/9b4b61d06d8a20f55de3f2aa580cbc5fb840d584/src/Shighl-chat.js#L214
      // and https://github.com/LDflex/LDflex/issues/53
      console.log(this.message)
      var dateObj = new Date();
      var messageId = "Msg"+dateObj.getTime()
      var date = dateObj.toISOString()
      let msgUrl = this.index+messageId
      /*  console.log(msgUrl)
      await solid.data[msgUrl].dct$created.add(date)
      await solid.data[msgUrl].sioc$content.add(this.message)*/


      const chatDoc = await fetchDocument(this.index);
      console.log(chatDoc)
      let subj =   chatDoc.addSubject({identifier:messageId})
      subj.addLiteral(sioc.content, this.message)
      subj.addLiteral(dct.created, date)
      await chatDoc.save();

      //  await solid.data[msgUrl].foaf$maker.add(namedNode('https://www.test.com')) // namedNode(`${webid}`)
      //  await solid.data.from(this.url)[messageId]['http://www.w3.org/2005/01/wf/flow#message'].add(this.url)
      //this.message = ""
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
