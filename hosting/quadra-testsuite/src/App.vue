<template>
  <v-app id="app">
    <Header />
    <v-main style="background-color: rgb(242, 247, 249)">
      <Toolbar />
      <v-container id="main-container" class="px-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";
export default {
  components: {
    Toolbar,
    Header,
  },
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";

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
    color: $primary;

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
  padding: 0px !important;
}

.category-title {
  font: normal normal bold 18px/24px Open Sans;
  letter-spacing: 0px;
  color: #2c3e50;
  opacity: 1;
}

.category-subtitle {
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0px;
  color: #5e738b;
  opacity: 1;
}

.article-title {
  font: normal normal bold 18px/24px Open Sans;
  letter-spacing: 0px;
  color: #2c3e50;
  opacity: 1;
}

.article-subtitle {
  font: normal normal normal 14px/19px Open Sans;
  letter-spacing: 0px;
  color: #5e738b;
  opacity: 1;
}
</style>
