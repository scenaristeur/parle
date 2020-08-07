<template>
  <div class="subject-list">

    <h3>{{ root }}</h3>



    <ul>
      <li v-for='folder in folders' :key="folder.url">

         <router-link :to="'?subject='+folder.url">{{ decodeURI(folder.name).replace("%2B","+") }}</router-link>
      </li>
    <!--  <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>-->
    </ul>

  </div>
</template>

<script>
import store from "@/store";

import auth from 'solid-auth-client';

export default {
  store,
  name: 'SubjectList',
  data: function () {
    return {
       root: null,
       folder: null,
       folders: []
    }
  },
  async  created(){
    this.fc = new SolidFileClient(auth)
    this.root = this.$store.state.chat.root
    //watch doesn not work, temporary in hard
    this.folder = await this.fc.readFolder("https://parle.solid.community/public/parle")
    console.log("f",this.folder)
  this.folders = this.folder.folders

  },
  mounted(){

  },
  computed:{
    /*root(){
      return this.$store.state.chat.root
    },*/

  },

  watch:{
    /*  root (root){
    console.log("$$$$$$$$$$ new root", root)
    this.folder = this.fc.readFolder(root)
    console.log("FOLDER",this.folder)
  }*/
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
