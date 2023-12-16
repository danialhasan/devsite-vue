const Home = () => import('./views/Home.vue');
const Calendly = () => import('./views/Calendly.vue');
const About = () => import('./views/About.vue');
const NotFound = () => import('./views/NotFound.vue');
const Articles = () => import('./views/Articles.vue');
const StudySage = ()=> import('./components/StudySage.vue')
const ArticleCardContainer = () =>
  import('./components/ArticleCardContainer.vue');

/** @type {const('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
    },
    name: 'Home',
  },
  {
    path: '/calendly',
    meta: {
      title: 'Danial`s Calendly',
    },
    name: 'Calendly',
    component: Calendly,
  },
  {
    path: '/about',
    meta: {
      title: 'About',
    },
    component: About,
    name: 'About',
  },

  {
    path: '/articles',
    component: Articles,
    name: 'Articles',
    children: [
      {
        path: '', // "" acts as the base route, not "/"
        component: ArticleCardContainer,
        name: 'ArticleCardContainer',
      },
    ],
  },
  {
    path: '/StudySage',
    component: StudySage,
    name: 'StudySage',
  },

  {
    path: '/:path(.*)',
    component: NotFound,
  },
];
