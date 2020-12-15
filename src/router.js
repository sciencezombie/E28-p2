import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog'
import BlogPreview from './components/BlogPreview'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
  { path:'/', component: Blog },
  { path: '/preview', component: BlogPreview}
  ]
});

export default router;