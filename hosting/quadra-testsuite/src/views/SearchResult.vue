<template>
<v-container>
    <div v-if="results === null || results === undefined">
      Recherche En Cours
    </div>
    <div
      v-if="results !== null && results !== undefined && results.length === 0"
    >
      Pas de Résultats
    </div>
    <div v-if="results !== null && results !== undefined && results.length > 0">
    <v-row >
      <v-col md="12" class="pa-0">
        <div>
          <v-breadcrumbs class="float-left pa-0">
            <span @click="gotoCategory()" style="cursor: pointer"
              >Aide en ligne</span
            >
            <template> / </template>
          </v-breadcrumbs>

          <v-breadcrumbs class="float-left pa-0">
            <b>Catégorie</b>
          </v-breadcrumbs>
        </div>
      </v-col>
    </v-row>
    <v-row >
      <v-col md="12 px-0">
        <v-card class="mx-0 px-10 pb-5">          
          <v-layout row wrap>
            <Article
              v-for="article in results"
              :key="article.path"
              :data="article"
            ></Article>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    </div>
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
      this.results = await api.default.getData("search/" + payLoad);
    });
  },
};
</script>