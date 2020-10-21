<template>
  <v-content row wrap class="home-content">

    <div v-if="categories === null">
      <v-skeleton-loader type=" article, actions"></v-skeleton-loader>
      <p></p>
      <v-skeleton-loader type=" article, actions"></v-skeleton-loader>
      <p></p>
      <v-skeleton-loader type=" article, actions"></v-skeleton-loader>
      <p></p>
      <v-skeleton-loader type=" article, actions"></v-skeleton-loader>
    </div>

    <div v-if="categories !== null && categories.length === 0">
      Pas de Contenu
    </div>

    <category
      v-for="category in categories"
      :key="category.path"
      :data="category"
    >
    </category>
  </v-content>
</template>

<script>
import * as api from "../services/api";
import category from "../components/category";

export default {
  name: "Home",
  components: {
    category,
  },
  data() {
    return {
      categories: null,
    };
  },
  async created() {
    this.categories = await api.default.getData("categories");
  },
};
</script>
