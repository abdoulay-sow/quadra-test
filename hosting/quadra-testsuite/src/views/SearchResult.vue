<template>
  <v-container>

    <div v-if="results === null || results === undefined">
        Recherche En Cours
    </div>
    <div v-if="results !== null && results !== undefined && results.length === 0">
        Pas de Résultats
    </div>
    
    <v-card v-if="results !== null && results !== undefined && results.length > 0">
      <v-layout row wrap>
        <Article
          v-for="article in results"
          :key="article.path"
          :data="article"
        ></Article>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import * as api from "../services/api";
import EventBus from "../plugins/eventbus";
import Article from "../components/article";
export default {
  components: {
    Article,
  },
  data() {
    return {
      results: null,
    };
  },

  mounted() {
    EventBus.$on("SEARCH_TEXT", async (payLoad) => {
      console.log("Di diote change bi => ", payLoad);

      this.results = await api.default.getData("search/" + payLoad);

      console.log("Result search => ", this.results);
    });
  },
};
</script>