<template>
  <v-app id="app">
    
    <Header/>
    <v-main style="background-color: rgb(242, 247, 249)">
      <Toolbar/>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Header from './components/Header'
export default {
  components: {
    Toolbar,
    Header    
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: green !important;
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

.text-title {
    text-transform: capitalize;
    display: block !important;
  }

  .v-main {
    padding: 0px !important
    }
</style>
