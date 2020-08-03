<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Solid Chat</router-link> |
      <a href="https://github.com/scenaristeur/parle/projects/1" target="_blank">Contribute</a> |
      <a href="https://parle.solid.community/public/" target="_blank">Data</a> |  
      <router-link to="/about">About</router-link>
      <!--  |
      <router-link to="/profile">Profile</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
