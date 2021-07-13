import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Articles from './views/Articles.vue'
import ArticleCardContainer from "./components/ArticleCardContainer.vue"

/** .type {import('vue-router').RouterOptions['routes']} */
export const routes = [{
    path: '/',
    component: () => import('./views/Home.vue'),
    meta: {
      title: 'Home'
    },
    name: "Home"
  },
  {
    path: '/about',
    meta: {
      title: 'About'
    },
    component: () => import('./views/About.vue'),
    name: "About"
  },

  {
    path: '/articles',
    component: () => import('./views/Articles.vue'),
    name: "Articles",
    children: [{
      path: "", // "" acts as the base route, not "/"
      component: () => import('./components/ArticleCardContainer.vue'),
      name: "ArticleCardContainer"
    }, ],
  },

  {
    path: '/:path(.*)',
    component: () => import('./views/NotFound.vue')
  },
]