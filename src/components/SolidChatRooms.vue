<template>
  <div class="solid-chat-send">



    <div>
      <b-button-group  v-for="f in folder.folders" :key="f.url" class="inline">
        <b-button variant="primary" :value="f.url" @click="changeRoom">
          {{ f.name}}
        </b-button>
      </b-button-group>
    </div>



    <b-input-group class="mt-3">
      <b-form-input v-model="message"></b-form-input>
      <b-input-group-append>
        <!--  <b-button variant="outline-success">Button</b-button>-->
        <b-button variant="primary" @click="send">Create room</b-button>
      </b-input-group-append>
    </b-input-group>
    <!--  -  root  {{ root }}<br>
    - index {{ index }}<br>
    - folder {{ folder }}
    <hr>-->
  </div>
</template>

<script>

import {namedNode, sioc, dct, foaf } from 'rdf-namespaces'
//import { SolidMixin } from '@/mixins/SolidMixin.js'
import auth from 'solid-auth-client';

export default {
  name: 'SolidChatRooms',
  components:{
    //solid
  },
  //  mixins: [SolidMixin],
  props: [
    'root', 'index'
  ],
  data: function () {
    return {
      message: "",
      folder: {}
      //    index : "https://parle.solid.community/public/test/lastest.ttl",
      //  subject: "ola"


    }
  },
  async created(){
    this.fc   = new SolidFileClient(auth)

    console.log(this.fc)

    this.readFolder()

    /*  if( await this.fc.itemExists(this.source)) {
    await this.fc.readFolder(this.source).then(folder => {
    console.log("Folder",folder.folders)
    //  store.commit('local/setShapeUrl', this.shape_url)
    this.folder = folder
  },
  err => { console.log("erreur for url : ", this.source,err) })
}*/
},
methods: {
  changeRoom(e){
    let newRoom = e.target.value
    console.log(newRoom)
  },
  readFolder(){
    this.fc.readFolder(this.root).then(folder => {
      console.log("READ Folder",folder)
      //  store.commit('local/setShapeUrl', this.shape_url)
      //let f = `${folder}`
      //return f
      this.folder = folder
    },
    err => { console.log("erreur for url : ", this.root,err) })
  },
  async send(){
    let webId= this.$store.state.solid.webId
    if (webId != null ){
      console.log(this.message)
      this.fc.createFolder(this.root+this.message).then(folder => {
        console.log("Folder",folder)
        console.log("folder created", folder)
        this.readFolder()
        //  store.commit('local/setShapeUrl', this.shape_url)
        //let f = `${folder}`
        //return f
        //  this.folder = folder
      },
      err => { console.log("erreur for url : ", this.root,err) })

    }else{ alert("You must login to create a room ! ")}
    // please refer to https://github.com/scenaristeur/shighl/blob/9b4b61d06d8a20f55de3f2aa580cbc5fb840d584/src/Shighl-chat.js#L214
    // and https://github.com/LDflex/LDflex/issues/53

    /*  var dateObj = new Date();
    var messageId = "#Msg"+dateObj.getTime()
    var date = dateObj.toISOString()
    let msgUrl = this.index+messageId
    console.log(msgUrl)
    await solid.data[msgUrl].dct$created.add(date)
    await solid.data[msgUrl].sioc$content.add(this.message)*/
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
