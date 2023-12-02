import HomePage from '../pages/HomePage.vue'
import PostsPage from '../pages/PostsPage.vue'
import PostPage from '../pages/PostPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/posts/:id',
    component: PostPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
