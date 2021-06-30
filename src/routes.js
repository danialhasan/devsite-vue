import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Articles from './views/Articles.vue'
// import Article from "./components/CaseStudy.vue"
import ArticleCardContainer from "./components/ArticleCardContainer.vue"
// import BenfordRoofingCaseStudy from "./components/CaseStudies/BenfordRoofingCaseStudy.vue"
// import CryptoAPICaseStudy from "./components/CaseStudies/CryptoAPICaseStudy.vue"

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

  //NOTE do not uncomment until case studies part of site is finished
  {
    path: '/articles',
    component: Articles,
    name: "Articles",
    children: [{
        path: "", // "" acts as the base route, not "/"
        component: ArticleCardContainer,
        name: "ArticleCardContainer"
      },
      // {
      //   path: "casestudy",
      //   component: Article,
      //   children: [{
      //       path: "",
      //       component: ArticleCardContainer,
      //       name: "ArticleCardContainer"
      //     },
      //     // {
      //     //   path: "BenfordRoofingCaseStudy",
      //     //   component: BenfordRoofingCaseStudy,
      //     //   name: "BenfordRoofingCaseStudy"
      //     // }, {
      //     //   path: "CryptoAPICaseStudy",
      //     //   component: CryptoAPICaseStudy,
      //     //   name: "CryptoAPICaseStudy"
      //     // }
      //   ]
      // }
    ],
  },

  {
    path: '/:path(.*)',
    component: NotFound
  },
]