import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/blogView.vue'
import BlogPostView from '@/views/blogPostView.vue'
import BoutUsView from '@/views/BoutUsView.vue'
import CategoryView from '@/views/categoryView.vue'
import AuthorsView from '@/views/authorsView.vue'
import ContactView from '@/views/contactView.vue'
import PrivacyView from '@/views/privacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },

    {
      path: '/blogPost',
      name: 'blogPost',
      component: BlogPostView,
    },

    {
      path: '/BoutUs',
      name: 'BoutUs',
      component: BoutUsView,
    },

    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },

    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
  ],
})

export default router
