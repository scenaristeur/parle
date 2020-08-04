<template>
  <div class="solid-ckhat-list">
    tip : just type text & send to continue the flow, or in case of new idea, click on a topic to create a new channel !
    Date :  <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="date" class="mb-2"></b-form-datepicker>
    </div>
    date : {{ date }} <br>
    root : {{ root }} <br>
    filename: {{ filename}}<br>
    path: {{ path }}<br>
    fileUrl: {{ fileUrl }} <br>
    <b-list-group  v-for="m in messages" :key="m.id">
      <b-list-group-item  button class="d-flex justify-content-between align-items-center"
      @click="new_sub(m.id)">
      <b-input-group class="mb-2">
        <b-input-group-prepend>

          <a v-bind:href="m.maker" v-if="m.maker != null" target="_blank">  <b-icon icon="person-fill"></b-icon> </a>
          <b-icon v-else  icon="person-fill"></b-icon>
        </b-input-group-prepend>
        <div class="ml-3 mr-3">
          {{ m.content}}
        </div>

      </b-input-group>

      <b-badge variant="info">
        {{ m.created }}
        <div>
          newRoom<br> reply <br>

        </div></b-badge>
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
import store from '@/store'
import BrowserMixin from '@/mixins/BrowserMixin'
import { fetchDocument, createDocument } from 'tripledoc';
import auth from 'solid-auth-client';
import { sioc, dct, foaf, schema } from 'rdf-namespaces'

var count = 0;
export default {
  store,
  name: 'SolidChatList',
  mixins: ['BrowserMixin'],
  data: function () {
    return {
      data: [],
      busy: false,
      date: "",
    }
  },
  async created(){
    this.fc   = new SolidFileClient(auth)
    this.date = new Date()
    this.path = this.$store.state.chat.root
    this.$store.commit('chat/setPath', this.path)

    let fileUrl = this.path+this.filename

    console.log(fileUrl)
    this.fileUrl = fileUrl
    if( !await this.fc.itemExists( fileUrl )) {
      await this.fc.postFile(fileUrl, "", "text/turtle")
      .then((content) => {
        console.log("File Created",content)
      })
      .catch(err => console.error(`Error: ${err}`))
    }else{
      console.log("File exist",fileUrl)
    }
    //  await  this.create(fileUrl)
    //  this.$store.commit('chat/setFileUrl', fileUrl)
    this.$store.state.websocket.socket.send('sub '+fileUrl);
  },
  methods: {
    dateToFilename(d){
      return [d.getFullYear(), ("0" + (d.getMonth() + 1)).slice(-2), ("0" + d.getDate()).slice(-2)].join("-")+".ttl"
    },
    async new_sub(parent){
      console.log(parent)
      var sub_channel = prompt("Create a sub-channel from "+parent);
      if (sub_channel != null){
        //create Path
        console.log(sub_channel)
        let path = parent.substr(0, parent.lastIndexOf("/") + 1)+sub_channel
        console.log(path)
        this.date = new Date()
        console.log(this.date)
        this.$store.commit('chat/setRoot', path+sub_channel)
        let filename = [this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2)].join("-")+".ttl"
        let fileUrl = path+"/"+filename
        console.log("FILEURL", fileUrl)
        this.$store.commit('chat/setFileUrl', fileUrl)
        //    this.$store.state.websocket.socket.send('sub '+fileUrl);
        // create Doc

        if( !await this.fc.itemExists( fileUrl )) {
          await this.fc.postFile(fileUrl, "", "text/turtle")
          .then((content) => {
            console.log("File Created",content)
          })
          .catch(err => console.error(`Error: ${err}`))
        }else{
          console.log("File exist",fileUrl)
        }

        const newDoc = await fetchDocument(fileUrl);
        console.log(newDoc)
        newDoc.addSubject
        let subj =   newDoc.addSubject({identifier: "this" })
        //  subj.addLiteral(sioc.content, this.message)
        subj.addLiteral(dct.created, this.date)
        subj.addNodeRef(schema.isPartOf, parent)
        subj.addNodeRef(foaf.maker, this.$store.state.solid.webId)
        await newDoc.save();

        //const referDoc = await await fetchDocument(parent)
      }
    },
  },
  watch:{
    /*  root(root){
    console.log("New Root", root)
  },
  fileUrl(fileUrl){
  console.log("new fileurl",fileUrl)
},*/
},
computed:{
  filename (){
    return this.dateToFilename(this.date)
  },
  path(){
    return this.$store.state.chat.path
  },
  root(){
    return this.$store.state.chat.root
  },

  messages(){
    return this.$store.state.chat.messages
  },
  /*
  fileUrl(){
  return this.$store.state.chat.fileUrl
},*/
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
