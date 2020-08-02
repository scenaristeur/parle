<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SolidChat msg="Welcome to Solid Chat"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SolidChat from '@/components/SolidChat.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SolidChat
  }
}
</script>
