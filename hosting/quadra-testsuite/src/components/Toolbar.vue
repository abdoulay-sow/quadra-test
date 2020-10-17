<!-- Ce Component Contient la barre de recherche-->
<template>
  <div id="toolbar">
    <v-container>
      <v-row
        style="color: white; width: 75%; margin-left: 12%"
        align="center"
        justify="center"
      >
        <v-col md="8"
          ><h2 style="text-align: left">
            Comment Pouvons nous vous aider ?
          </h2></v-col
        >
        <v-col
          md="4"
          v-on:click="redirectionToSite('https://www.affixe-logiciel.fr/')"
          style="cursor: pointer; text-align: right"
          >Aller sur Affixe 2.0
          <v-icon style="color: white">mdi-launch</v-icon></v-col
        >
      </v-row>
      <v-row
        align="center"
        justify="center"
        style="width: 75%; margin-left: 12%"
      >
        <v-col md="12">
          <v-text-field
            v-model="keyword"
            solo
            label="Chercher des réponses"
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


<style>
#toolbar {
  height: 30vh;
  background-color: rgb(53, 153, 220);
  margin: auto;
  margin-top: 50px;
  padding-top: 15px;
}
.v-container {
  margin: auto;
}

@media (max-width: 960px) {
  #toolbar {
    height: 30vh;
  }
}
</style>