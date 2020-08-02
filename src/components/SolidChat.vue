<template>
  <div class="hello">
    <h1>Solid Chat</h1>
    <!--  <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
  </p>-->
 <SolidChatRooms :root="this.root" :index="this.index" />
  <p>
    root : {{ root }}
    Index  : {{ index }}
  </p>
  <!--  <SolidList  /> -->
  <SolidChatSend :index="index" />

</div>
</template>

<script>
import SolidChatSend from '@/components/SolidChatSend.vue'
import SolidChatRooms from '@/components/SolidChatRooms.vue'
//import SolidList from '@/components/SolidList.vue'
import { fetchDocument } from 'tripledoc';


export default {
  name: 'SolidChat',
  components: {
    SolidChatSend,
    SolidChatRooms
    //  SolidList
  },
  props: {
    root: String,
  },
  data: function () {
    return {
      history: Array
    }
  },
  mounted(){
    //  this.history = ["no","one","tri"]

  },
  created() {
    console.log("CREATE ", this.root)
    console.log("Chat Root",this.root)
    let withoutProtocol = this.root.split('//')[1]
    console.log(withoutProtocol)
    let sock = withoutProtocol.split('/')[0]+"/"
    console.log("Sock",sock)
    let now = new Date()
    let filename = [now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2)].join("-")+".ttl"
    this.index = this.root+"parle/"+filename
    console.log("Index",this.index)
    //  let app = this
    var socket = new WebSocket('wss://'+sock, ['solid/0.1.0-alpha']);
    console.log("SOCKET",socket)
    socket.onopen = function() {
      console.log("SOCKET OPEN", socket,+this.index)
      socket.send('sub '+this.index);
    }.bind(this)
    socket.onmessage = function(msg) {

      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        // resource updated, refetch resource
        this.resourceUpdated(msg)
      }
    }.bind(this)
  },
  methods: {
    async  resourceUpdated(msg) {
      console.log("updated",msg.data)
      //  this.history.push({type: "update", url: msg.data})
      let uri = msg.data.substring(4)
      console.log(uri)
      const chatDoc = await fetchDocument(uri);
      console.log(chatDoc)
      const subjects = chatDoc.findSubjects();
      console.log(subjects)
    /*  const statements = chatDoc.getStatements();
      console.log(statements)*/
      //  this.history = statements
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
