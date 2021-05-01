<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><p class="title is-3"> Magician School Education</p></router-link>
    </div>
    <router-view/>
    <Copyright></Copyright>
  </div>
</template>
<script>
import Copyright from './views/common/Copyright'
export default {
  name: 'App',
  components: {
    Copyright
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
