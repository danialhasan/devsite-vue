const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const NotFound = () => import('./views/NotFound.vue')
const Articles = () => import('./views/Articles.vue')
const ArticleCardContainer = () => import("./components/ArticleCardContainer.vue")

/** @type {const('vue-router').RouterOptions['routes']} */
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