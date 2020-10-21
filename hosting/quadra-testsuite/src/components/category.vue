<!--
    Ce component Répresente une Categorie
    Affiché sur la liste des catégories
    Exemple Page : Home
-->

<template>
  <v-card  @click="goArticles()" class="my-5 py-5 px-10" id="categorie" style="width: 722px !important">
    <v-row>
      <v-col md="1" class="px-0">
        <v-img    
          class=" pa-3"
                       
          :src="data.image"
        ></v-img>
      </v-col>
      <v-col md="11" class="text-left">
        <span class="category-title">
          <b>{{ data.nom }}</b>
        </span><br />
        <span class="category-subtitle">
          {{ data.article_nbr }} articles dans cette catégorie </span
        >
        
        <span> </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import * as moment from "moment";
export default {
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
    goArticles() {
      this.$router.push({
        path: `/category/${this.data.id}`,
        query: { category: this.data },
      });
    },
  },
};
</script>

<style lang="scss">


</style>