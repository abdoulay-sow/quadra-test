<template>
  <v-container>
    <v-row>
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
          <p
            v-if="category !== null && category !== undefined"           
          >
            <v-row>
              <v-col md="2" class="px-0 mx-0">
                <v-img                  
                  class="mx-0"
                  max-width="60"
                  :src="category.image"
                >
                </v-img>
              </v-col>
              <v-col md="10" class="text-left my-auto">
                <span><b>{{ category.nom }}</b></span><br>
                <span>{{ category.article_nbr }} dans cette catégorie</span>                
              </v-col>
            </v-row>
          </p>
          <v-layout row wrap>
            <Article
              v-for="article in articles"
              :key="article.path"
              :data="article"
            ></Article>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as api from "../services/api";
import Article from "../components/article";
export default {
  name: "ShowCategory",
  components: {
    Article,
  },
  data() {
    return {
      articles: null,
      category: null,
    };
  },
  async created() {
    this.articles = await api.default.getData(
      `category-articles/${this.$route.params.slug}`
    );
    this.category = this.$route.query.category;

    console.log("La categorie => ", this.category)

    /* En Cas de Reloading de la Page */
    if (typeof this.category === "string" || this.category === undefined) {
      this.category = await api.default.getData(
        `category/${this.$route.params.slug}`
      );
    }
  },
  methods: {
    gotoCategory() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 722px !important;
  .v-card {
    width: 100% !important;
  }

}
</style>