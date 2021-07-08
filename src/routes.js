import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Articles from './views/Articles.vue'
import ArticleCardContainer from "./components/ArticleCardContainer.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [{
    path: '/',
    component: Home,
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
    component: About,
    name: "About"
  },

  {
    path: '/articles',
    component: Articles,
    name: "Articles",
    children: [{
      path: "", // "" acts as the base route, not "/"
      component: ArticleCardContainer,
      name: "ArticleCardContainer"
    }, ],
  },

  {
    path: '/:path(.*)',
    component: NotFound
  },
]