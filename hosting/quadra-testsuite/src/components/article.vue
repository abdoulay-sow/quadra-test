<!--
    Ce component Répresente un Article
    Affiché sur la liste des Articles
    Exemple Page : ShowCategory
-->

<template>
  <div
    @click="gotoArticle()"
    class="mt-2 mx-0"
    style="width: 100%; background-color: rgb(242, 247, 249)"
  >
    <v-row>
      <v-col md="12" class="text-left ma-auto px-15">
        <span class="article-title">
          <b>{{ data.nom }}</b>
        </span>
          <br>
        <span class="article-subtitle" style="font-size: small"
          >Mise à jour il y a {{ date }}</span
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as moment from "moment";
export default {
  name: "Article",
  props: ["data"],
  data() {
    return {
      date: null,
    };
  },
  created() {
    moment.locale("fr");
    this.date = moment(this.data.date).fromNow();

    console.log("Date => ", this.date);
  },
  methods: {
    gotoArticle() {
      if (this.$router.history.current.name.indexOf("search")) {
        this.$router.replace({
          path: `/article/${this.data.id}`,
          query: { article: this.data },
        });
      } else {
        this.$router.push({
          path: `/article/${this.data.id}`,
          query: { article: this.data },
        });
      }
    },
  },
};
</script>

<style lang="scss">
.v-card {
  display: block;
  width: 60% !important;
  margin: auto;

  .v-image {
    margin: auto;
    width: 90%;
  }

  .text-middle-left {
    text-align: left;
  }
}
.v-breadcrumbs {
  display: inline-block;  
}
</style>
