<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <p>
      History on  https://parle.solid.community/public/test/lastest.ttl' : {{ history }}
    </p>
    <SolidChatSend />

  </div>
</template>

<script>
import SolidChatSend from '@/components/SolidChatSend.vue'
export default {
  name: 'SolidChat',
  components: {
    SolidChatSend
  },
  props: {
    msg: String,

  },
  data: function () {
    return {
      history: Array
    }
  },
  mounted(){
    this.history = ["no","one","tri"]
  },
  created() {
    //  let app = this
    var socket = new WebSocket('wss://parle.solid.community/', ['solid/0.1.0-alpha']);

    socket.onopen = function() {
      this.send('sub https://parle.solid.community/public/test/lastest.ttl');
    };
    socket.onmessage = function(msg) {

      if (msg.data && msg.data.slice(0, 3) === 'pub') {
        // resource updated, refetch resource
        this.resourceUpdated(msg)
      }
    }.bind(this)
  },
  methods: {
    resourceUpdated(msg) {
      console.log("updated",msg.data)
      this.history.push({type: "update", url: msg.data})

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
