import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowCategory from '../views/ShowCategory'
import ShowArticle from '../views/ShowArticle'
import SearchResult from '../views/SearchResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:slug',
    name: 'category',
    component: ShowCategory
  },
  {
    path: '/search',
    name: 'search',
    component: SearchResult
  },
  {
    path: '/article/:slug',
    name: 'search',
    component: ShowArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
