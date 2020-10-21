<!-- Ce Component Contient la barre de recherche-->
<template>
  <div id="toolbar">
    <v-container id="toolbar-container">
      <v-row
        
      >
        <v-col md="8"
          ><h2 class="text-left white--text">
            Comment Pouvons nous vous aider ?
          </h2></v-col
        >
        <v-col
          class="text-right white--text"
          md="4"
          v-on:click="redirectionToSite('https://www.affixe-logiciel.fr/')"
          style="cursor: pointer"
          ><div class="mt-2"> Aller sur Affixe 2.0
          <v-icon style="color: white">mdi-launch</v-icon>
          </div>
          </v-col
        >
      </v-row>
      <v-row
        
      >
        <v-col md="12">
          <v-text-field
            v-model="keyword"
            solo
            label="Rechercher des réponses"
            prepend-inner-icon="mdi-magnify"
            @input="debounceInput"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import EventBus from "../plugins/eventbus";
import * as _ from "lodash";
export default {
  name: "Toolbar",
  data: () => ({
    keyword: "",
  }),
  created() {},
  methods: {
    redirectionToSite(url) {
      window.open(url, "_blank");
    },

    // Attend au moins que l'utilisateur finnisse de taper
    debounceInput: _.debounce(function (e) {
      if (e.length === 0) {
        this.$router.replace({ path: "/" });
      }
      if (window.location.href.indexOf("search") == -1) {
        if (e.length > 0) {
          this.$router.replace({ path: "/search" });
        }
      }

      setTimeout(() => {
        if (e.length > 0) {
          EventBus.$emit("SEARCH_TEXT", e);
        }
      }, 500);
    }, 500),
  },
};
</script>


<style lang="scss">
@import "../styles/_variables.scss";
#toolbar {
  // height: 30vh;
  background-color: rgb(53, 153, 220);
  margin: auto;
  /* margin-top: 50px; */
  padding-top: 15px;
}
.v-container {
  margin: auto;
}

#toolbar-container {    
    width: $container-width;
  }



</style>