<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <div style="padding-left: 13%; text-align: left">
          <v-breadcrumbs>
            <span @click="gotoCategory()" style="cursor: pointer"
              >Aide en ligne</span
            >
            <template> / </template>
          </v-breadcrumbs>

          <v-breadcrumbs style="padding-left: 0px">
            <b>Catégorie</b>
          </v-breadcrumbs>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        v-if="article !== null && article !== undefined"
        style="padding-bottom: 5px"
      >
        <v-card-title class="mr-10 ml-10">
          {{ article.nom }}
        </v-card-title>

        <img :src="article.image" style="max-width: 80% !important" />
        <v-card-text class="pa-15" style="padding-bottom: 5px !important">
          <p style="display: block; text-align: left">
            {{ article.contenu }}
          </p>
        </v-card-text>

        <v-card-actions
          class="ml-5 mr-5 mt-7 mb-7 pa-5"
          style="background-color: rgb(242, 247, 249)"
        >
          <b>Ces Informations vous-ont elles été utile ?</b>

          <span class="emoji">&#x1F600;</span>
          <span class="emoji">&#x1F610;</span>
          <span class="emoji">&#x1F614;</span>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import * as api from "../services/api";
export default {
  name: "ShowArticle",
  data() {
    return {
      article: null,
    };
  },
  async created() {
    this.article = this.$route.query.article;

    if (typeof this.article === "string" || this.article === undefined) {
      this.article = await api.default.getData(
        `article/${this.$route.params.slug}`
      );
    }
  },
  methods: {
    gotoCategory() {
      if (this.$router.history.current.name.indexOf("search") !== -1) {
        this.$router.replace({ path: "/" });
      } else {
        this.$router.back();
      }
    },
  },
};
</script>


<style lang="scss">
.v-card {
  display: block;
  width: 70% !important;
  margin: auto;

  .v-image {
    margin: auto;
  }

  .text-middle-left {
    text-align: left;
  }

  .emoji {
    display: inline-block;
    margin: 0px 10px;
    font-size: 40px;
  }
}
</style>