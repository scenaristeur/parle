<template>
  <div class="solid-ckhat-list">
    <b-list-group  v-for="m in messages" :key="m.id">
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
  </template>

  <script>
  export default {
    name: 'SolidChatList',
    props: {

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
