import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogShow from '@/views/Blog/BlowShow.vue'
import LiushengShow from '@/views/LiuSheng/LiuShengShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () =>
      import(/* webpackChunkName: "Blog" */ '../views/Blog/BlogHomepage.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogShow',
    component: BlogShow,
    props: true
  },
  {
    path: '/liusheng',
    name: 'LiuSheng',
    component: () =>
      import(
        /* webpackChunkName: "Blog" */ '../views/LiuSheng/LiuShengHomepage.vue'
      )
  },
  {
    path: '/liusheng/:id',
    name: 'LiuShengShow',
    component: LiushengShow,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
