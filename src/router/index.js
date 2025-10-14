import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Team from '../components/Team.vue'
import Kontakt from '../components/Kontakt.vue'
import FAQ from '../components/FAQ.vue'
import BlogList from '../components/BlogList.vue'
import BlogPost from '../components/BlogPost.vue'
import FeedbackAdmin from '../components/FeedbackAdmin.vue'
import Feedback from '../components/Feedback.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/kontakt', component: Kontakt },
  { path: '/faq', component: FAQ },
  { path: '/blog', component: BlogList },
  { path: '/blog/:slug', component: BlogPost },
  { path: '/admin/feedback', component: FeedbackAdmin },
  { path: '/feedback', component: Feedback },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
