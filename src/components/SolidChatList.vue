<template>
  <div class="solid-ckhat-list">


    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">

      <b-list-group  v-for="m in data" :key="m.id">
        <b-list-group-item button class="d-flex justify-content-between align-items-center">
          <b-input-group class="mb-2">
            <b-input-group-prepend is-text>

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
    </div>
  </template>

  <script>
  import store from '@/store'
  import infiniteScroll from 'vue-infinite-scroll'
  import BrowserMixin from '@/mixins/BrowserMixin'
  import { fetchDocument } from 'tripledoc';
  import { sioc, dct, foaf } from 'rdf-namespaces'

  var count = 0;
  export default {
    store,
    directives: {infiniteScroll},
    name: 'SolidChatList',
    mixins: ['BrowserMixin'],
    data: function () {
      return {
        data: [],
        busy: false,
        date: ""
      }
    },
    created(){
      this.date = new Date()
    },
    methods: {
      async loadMore() {
        this.busy = true;
        console.log(this.date)
        //  let fileUrl = this.$store.state.chat.fileUrl
        //  let root = this.$store.state.chat.root

        //  this.$store.commit('chat/setDataDate', now)
        let filename = [this.date.getFullYear(), ("0" + (this.date.getMonth() + 1)).slice(-2), ("0" + this.date.getDate()).slice(-2)].join("-")+".ttl"
        let fileUrl = this.$store.state.chat.root+filename

        console.log(fileUrl)

        const chatDoc = await fetchDocument(fileUrl);
        //  console.log(chatDoc)
        /*  let triples = chatDoc.getTriples()
        console.log(triples)
        //  this.messages = {}
        triples.forEach((t, i) => {
        !Object.prototype.hasOwnProperty.call(this.messages, t.subject.id) ? this.messages[t.subject.id] = {} : "";
        this.messages[t.subject.id][t.predicate.id] = t.object.id

      });
      console.log(this.messages)*/
      let  subjects = chatDoc.findSubjects();
      subjects = subjects.filter( this.onlyUnique )
      //    console.log(subjects)
      let triples = []
      subjects.forEach((s, i) => {
        //console.log()
        //  let t = s.getTriples()
        let created = s.getString(dct.created)
        let content = s.getLiteral(sioc.content)
        let maker = s.getNodeRef(foaf.maker)
        let t={id:s.asRef(), created: new Date(created).toLocaleString(), content: content, maker:maker}
        //  console.log(t)
        triples.push(t)

      });
      //  console.log(triples)
      this.data  = this.data.concat(triples.reverse())
      //  this.data = messages
      console.log("Messages",this.data)

      this.busy = false;
      this.$store.state.websocket.socket.send('sub '+fileUrl);
      this.date.setDate(this.date.getDate() - 1);
      /*  setTimeout(() => {
      for (var i = 0, j = 10; i < j; i++) {
      this.data.push({ name: count++ });

    }
    this.busy = false;
  }, 1000);*/
},
onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
},
watch:{
  messages (messages) {
    console.log(" Insertion à revoir",messages)
    let messTemp= messages.concat(this.data)
    this.data = messTemp.filter( this.onlyUnique )
    /*messages.forEach((m, i) => {
    console.log(m)
    if (this.data.filter(e => e.id === m.id).length == 0) {
    /* vendors contains the element we're looking for */
    /*  console.log("pas trouvé",m)
  }else{
  console.log("trouvé",m)
}
});*/


}
},
computed:{
  messages(){
    return this.$store.state.chat.messages
  }
},
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
