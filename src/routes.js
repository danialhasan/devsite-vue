import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import CaseStudies from './views/CaseStudies.vue'
import CaseStudy from "./components/CaseStudy.vue"
import CaseStudyCardContainer from "./components/CaseStudyCardContainer.vue"
import BenfordRoofingCaseStudy from "./components/CaseStudies/BenfordRoofingCaseStudy.vue"
import CryptoAPICaseStudy from "./components/CaseStudies/CryptoAPICaseStudy.vue"

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
    path: '/case-studies',
    component: CaseStudies,
    name: "CaseStudies",
    children: [{
        path: "", // "" acts as the base route, not "/"
        component: CaseStudyCardContainer,
      },
      {
        path: "casestudy",
        component: CaseStudy,
        children: [{
            path: "",
            component: CaseStudyCardContainer,
            name: "CaseStudyCardContainer"
          },
          {
            path: "BenfordRoofingCaseStudy",
            component: BenfordRoofingCaseStudy,
            name: "BenfordRoofingCaseStudy"
          }, {
            path: "CryptoAPICaseStudy",
            component: CryptoAPICaseStudy,
            name: "CryptoAPICaseStudy"
          }
        ]
      }
    ],
    name: "CaseStudies"
  },
  /**
   * I want to render the component that has the caseStudy param as a name,
   * which is given its body prop info from CaseStudies.vue
   * 
   * There may be no way for data to be given from CaseStudies.vue to the CaseStudy.vue component.
   * I might just have to use VueX for centralized state.
   * 
   * I may have to delete some code and start from a previous state, in order to make this work. 
   * 
   * If this doesn't work, I can always simply create different components for each case study and 
   * render those when their route is requested. I think I'll do that and in the future, when
   * I'm knowledgable in VueX/something else, I'll try the centralized prop method. 
   */

  // {
  //   path: '/case-studies/:caseStudy',
  //   component: ""
  // },
  {
    path: '/:path(.*)',
    component: NotFound
  },
]