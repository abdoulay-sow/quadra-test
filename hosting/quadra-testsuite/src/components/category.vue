<!--
    Ce component Répresente une Categorie
    Affiché sur la liste des catégories
    Exemple Page : Home
-->

<template>
    <v-card class="mt-5" @click="goArticles()">        
        <v-row align="center" justify="center">
            <v-col md="4" class="pd-0">
            <v-img
                class="mr-0"
                max-height="70"
                max-width="150"
                :src=data.image></v-img>
            </v-col>
            <v-col md="8" class="text-middle-left">
                    <!-- <router-link :to="'category/'+data.id" > -->
                    <!-- <router-link :to="{name: 'places', params: {placeName: detail.name }}" > -->
                        <span class="text-title">
                            <b>{{data.nom}}</b>
                        </span>
                    <!-- </router-link> -->
                <span class="text-description">
                    {{data.article_nbr}} articles dans cette catégorie
                </span><br>
                <span class="text-description" style="font-size: smaller;">
                    Mise à jour il y a {{date}}
                </span>
                <span>
                </span>
                
            </v-col>
        </v-row>
    
        
    </v-card>
</template>

<script>
import * as moment from 'moment'
export default {
    props: ['data'],  
    data() {
        return {
            date: null,
        }
    },
    created() {
        

        moment.locale('fr')
        this.date = moment(this.data.date).fromNow()

        // this.date =  this.data.date
        console.log('Date => ', this.date)
    },
    methods: {
        goArticles() {
            this.$router.push({path: `/category/${this.data.id}`,query: { category: this.data } })
        }
    }
}
</script>

<style lang="scss">
   .v-card {
        display: block;
        width: 60% !important;
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