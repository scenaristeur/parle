<template>
  <div class="hello">
    <SolidLogin />
    <SolidChatRooms :root="this.base" :index="this.index" />
    <!--<p>
    root : {{ root }}
    Index  : {{ index }}
  </p> -->
 <SolidChatList :messages="messages" />





    <b-button @click="before">day before</b-button>
    <b-button @click="after">day after</b-button>
    or infinite scroll, loading yesterday...
    <br>
    <a v-bind:href="root" target="_blank">where is the data</a>
    <br>
    <a href="https://github.com/scenaristeur/parle" target="_blank">source</a>
    <br><br><br><br><br><br>

    <SolidChatSend :index="index" />
  </div>
</template>

<script>
import SolidChatSend from '@/components/SolidChatSend.vue'
import SolidChatRooms from '@/components/SolidChatRooms.vue'
import SolidLogin from '@/components/SolidLogin.vue'
import SolidChatList from '@/components/SolidChatList.vue'
import { fetchDocument } from 'tripledoc';
import { sioc, dct, foaf } from 'rdf-namespaces'


export default {
  name: 'SolidChat',
  components: {
    SolidChatSend,
    SolidChatRooms,
    SolidLogin,
    SolidChatList
  },
  props: {
    root: String,
  },
  data: function () {
    return {
      history: [],
      messages : [],

    }
  },
  mounted(){
    //  this.history = ["no","one","tri"]

  },
  created() {
    console.log("CREATE ", this.root)
    console.log("Chat Root",this.root)
    this.base = this.root+"parle/"
    let withoutProtocol = this.root.split('//')[1]
    console.log(withoutProtocol)
    let sock = withoutProtocol.split('/')[0]+"/"
    console.log("Sock",sock)
    let now = new Date()
    let filename = [now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2)].join("-")+".ttl"
    this.index = this.root+"parle/"+filename
    console.log("Index",this.index)
    //  let app = this
    var socket = new WebSocket('wss://'+sock, ['solid.0.1.0']);
    console.log("SOCKET",socket)
    socket.onopen = function() {
      console.log("SOCKET OPEN", socket,+this.index)
      socket.send('sub '+this.index);
    }.bind(this)
    socket.onmessage = function(msg) {

      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        // resource updated, refetch resource
        console.log("updated",msg.data)
        //  this.history.push({type: "update", url: msg.data})

        this.resourceUpdated(msg.data.substring(4))
      }
    }.bind(this)
    this.resourceUpdated(this.index)
  },
  methods: {
    before(){
      console.log("before")
    },
    after(){
      console.log("after")

    },
    async  resourceUpdated(uri) {

      console.log(uri)
      const chatDoc = await fetchDocument(uri);
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
      //  console.log(s)
      //  let t = s.getTriples()
      let created = s.getString(dct.created)
      let content = s.getLiteral(sioc.content)
      let maker = s.getNodeRef(foaf.maker)
      let t={id:i, created: new Date(created).toLocaleTimeString(), content: content, maker:maker}
      //  console.log(t)
      triples.push(t)

    });
    //  console.log(triples)
    this.messages = triples.reverse()

    /*  const statements = chatDoc.getStatements();
    console.log(statements)*/
    //  this.history = statements
  },
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
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
