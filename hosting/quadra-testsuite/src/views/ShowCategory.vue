<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <div style="
    padding-left: 13%;
    text-align: left;">
          <v-breadcrumbs>
            <span @click="gotoCategory()" style="cursor: pointer">Aide en ligne</span>
            <template>
                /              
            </template>
          </v-breadcrumbs>

          <v-breadcrumbs style="padding-left: 0px">
            <b>Catégorie</b>
           
          </v-breadcrumbs>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-card style="padding-bottom: 35px">
          <p v-if="category !== null && category !== undefined" style="text-align: left">
            <v-row>
              <v-col md="3">
                <v-img
                  class="mr-0"
                  max-height="70"
                  max-width="150"
                  :src="category.image"
                >
                </v-img>
              </v-col>
              <v-col md="8">
                <p class="mb-0">
                   <b>{{ category.nom }}</b>
                </p>
                <p>{{ category.article_nbr }} dans cette catégorie</p>
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
import Article from "./article";
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
    console.log("Component Created");
    console.log("Rours => ", this.$route);

    this.articles = await api.default.getData(
      `category-articles/${this.$route.params.slug}`
    );
    this.category = this.$route.query.category;

    console.log("categorie ", this.category)

    console.log("Category => ", typeof this.category);

    if(typeof this.category === "string" || this.category === undefined) 
    {
        this.category = await api.default.getData(
            `category/${this.$route.params.slug}`
        )
    }

    console.log("les articles => ", this.articles);
  },
  methods: {
      gotoCategory() {
          this.$router.back()
        }
  }
};
</script>

<style lang="scss">
.v-card {
  display: block;
  width: 70% !important;
  margin: auto;
  // margin-top: 50px !important;

  .v-image {
    margin: auto;
  }

  .text-middle-left {
    text-align: left;
  }
}
</style>