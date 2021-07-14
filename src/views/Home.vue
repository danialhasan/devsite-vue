<script>
import { defineComponent } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";
import Navbar from "@/components/Navbar.vue";
import ContactButton from "@/components/ContactButton.vue";
import ResumeButton from "@/components/ResumeButton.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Banner from "@/components/Banner.vue";
import SkillsetComponent from "@/components/SkillsetComponent.vue";

export default defineComponent({
  data() {
    return {
      projects: [
        // NOTE: the 'rewriting' and 'building' properties are never both true. They're either opposites or they're both false.
        {
          title: "Benford Roofing",
          description:
            "Static website designed to bring Benford Roofing more clients, in combination with Google ads. ",
          image: "/assets/benfordroofing.png",
          githubLink: "https://github.com/danialhasan/roofing-company",
          caseStudy:
            "https://www.notion.so/Benford-Roofing-1de3683dc4cb40c1b06917ab5161de90",
          link: "https://benfordroofing.com",
          rewriting: false,
          building: false,
        },
        {
          title: "Crypto API",
          description:
            "This web app uses the CoinMarketCap API to retrieve data regarding 4 cryptocurrencies.",
          image: "/assets/cryptoapi.png",
          githubLink: "https://github.com/danialhasan/cryptoapi",
          caseStudy:
            "https://www.notion.so/Crypto-API-c9468a5ee5d34bc4bbc4f0ff1c2c8cc5",
          link: "https://crypto-api-dh.herokuapp.com/",
          rewriting: true,
          building: false,
        },
        {
          title: "Portfolio Site",
          description:
            "This website (the one you're currently on) displays my portfolio of projects.",
          image: "/assets/portfoliosite.png",
          githubLink: "https://github.com/danialhasan/devsite-vue",
          caseStudy:
            "https://www.notion.so/Portfolio-Site-1528fcdb950a4975a08883385857d34e",
          link: "https://hasandev.ca",
          rewriting: false,
          building: false,
        },
        {
          title: "Address Lookup ",
          description:
            "This web app lets you view the account balance of any Ethereum address.",
          image: "/assets/cryptoaddresstracer.png",
          githubLink: "https://github.com/danialhasan/crypto_address_tracer",
          caseStudy:
            "https://www.notion.so/Crypto-Address-Tracer-b261e0660926406e93d1da435a8002f5",
          link: "https://crypto-address-tracer.herokuapp.com/",
          rewriting: true,
          building: false,
        },
        {
          title: "Unsplash Clone",
          description:
            "This web app is a mix of Unsplash and Instagram. Integrated with AWS Rekognition, a machine-learning API.",
          image: "/assets/project_image_placeholder.jpg",
          githubLink: "https://github.com/danialhasan/unsplash_clone",
          caseStudy:
            "https://www.notion.so/Unsplash-Clone-01377fdd2cd4494c85c8bf1599caa8d6",
          link: "https://unsplash-clone-dh.netlify.app/",
          rewriting: false,
          building: true,
        },
      ],
      skills: {
        frontend: [
          {
            title: "Vue.js",
            description:
              "Component scaffolding, modularity, and web interfaces. I use Vue 3 for most of my front-end projects.",
            image: "/assets/skillset_logos/vue_logo.svg",
            experience: 3,
          },
          {
            title: "TailwindCSS",
            description:
              "My favourite CSS framework. I’ve designed most of my modern web projects in TailwindCSS.",
            image: "/assets/skillset_logos/tailwindcss_logo.svg",
            experience: 2,
          },
          {
            title: "Javascript",
            description:
              "My bread and butter for building web apps. I can do everything in Javascript.",
            image: "/assets/skillset_logos/javascript_logo.svg",
            experience: 4,
          },
          {
            title: "HTML/CSS",
            description:
              "Semantic HTML, SEO, plain and powerful CSS. This is what I started with.",
            image: "/assets/skillset_logos/html_logo.svg",
            experience: 5,
          },
        ],
        backend: [
          {
            title: "Node.js",
            description:
              "The runtime environment I build my backend in. I use javascript for the backend and frontend.",
            image: "/assets/skillset_logos/nodejs_logo.svg",
            experience: 2,
          },
          {
            title: "Express.js",
            description:
              "My favourite backend/API framework for Node. I use this to build APIs and handle HTTP requests.",
            image: "/assets/skillset_logos/express_logo.svg",
            experience: 2,
          },
          {
            title: "MongoDB",
            description:
              "My preferred database of choice. I use Mongoose to speed up MongoDB interactions.",
            image: "/assets/skillset_logos/mongodb_logo.svg",
            experience: 2,
          },
        ],
      },
    };
  },
  components: {
    ButtonRepo,
    Navbar,
    ContactButton,
    ResumeButton,
    ProjectCard,
    FooterComponent,
    Banner,
    SkillsetComponent,
  },
  methods: {
    scrollToForm() {
      const footer = document.getElementById("footer");
      setTimeout(() => {
        /**
         * Note: The reason this uses a setTimeout function, is because
         * scrolling doesn't work without it whenever theres extra code below it
         * in the function. Currently, the causeis unknown. StackOverflow granted the
         * setTimeout function hack.
         */
        window.scrollTo({
          top: footer.offsetTop,
          behavior: "smooth",
        });
      }, 50);

      var windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (windowWidth <= 1023) {
        //1023 and not 1024, because of the way Tailwind's media query classes work.
        // focus mobile form
        document.getElementById("mobile_name_input").focus();
      } else {
        // focus desktop form
        document.getElementById("desktop_name_input").focus();
      }
    }, //refactor later, add polyfill
    scrollToSection(section) {
      // This scrolling is to be done after the page has been set to / either through router link or window.location.
      // if using window.location, check window url first to make sure youre not unnecessarily refreshing the page.
      console.log(section); //NOT RUNNING WHEN MOBILE NAVBAR ITEMS CLICKED IN /CASE-STUDIES
      const projects = document.getElementById("projects");
      const skillset = document.getElementById("skillset");
      switch (section) {
        case "contact":
          this.scrollToForm();
          break;
        case "projects":
          console.log(window.location.href); //doesn't activate in /case-studies for some reason
          window.scrollTo({
            top: projects.offsetTop,
            behavior: "smooth",
          });
          break;
        case "skillset":
          window.scrollTo({
            top: skillset.offsetTop,
            behavior: "smooth",
          });

          break;
        case "resume":
          window.open("/assets/dh-resume.pdf", "_blank");
          break;

        default:
          document.getElementById("header").scrollIntoView(true);
          break;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>

<template>
  <div>
    <banner />
    <navbar @mobileNavigationTo="scrollToSection" />
    <div
      id="header"
      class="
        text-soft-black-background
        dark:text-soft-white
        font-bold
        text-center
        w-full
        h-auto
        mt-32
      "
    >
      <h1 class="text-5xl">I'm Danial.</h1>
      <h2 class="text-2xl my-4 px-24">I'm a full stack web developer.</h2>
      <div class="w-full h-auto flex flex-col lg:flex-row justify-center mt-12">
        <contact-button @clicked="scrollToForm" />
        <resume-button />
      </div>
      <div class="mt-12 flex flex-row justify-center items-center">
        <h4 class="font-serif text-xl uppercase">Available</h4>
        <span class="ml-3 flex flex-row h-3 w-3">
          <span
            class="
              absolute
              animate-ping
              h-3
              w-3
              rounded-full
              bg-green-400
              opacity-75
            "
          ></span>
          <span class="rounded-full h-3 w-3 bg-neon-green"></span>
        </span>
      </div>
    </div>
    <div id="projects" class="w-full h-auto">
      <h2 class="font-bold text-4xl text-center my-12">Projects</h2>
      <div
        class="
          w-full
          max-w-screen-md
          lg:max-w-screen-xl
          lg:justify-items-center
          mx-auto
          h-auto
          px-4
          md:px-16
          flex flex-col
          lg:grid lg:grid-cols-2
          2xl:grid-cols-3
          lg:justify-evenly
          lg:items-stretch
          space-y-10
          lg:space-y-0
        "
      >
        <div
          v-for="project in this.projects"
          :key="project"
          class="lg:max-w-[440px] lg:h-auto lg:p-4"
        >
          <project-card v-bind="project" />
        </div>
      </div>
    </div>
    <div id="skillset" class="w-full h-auto my-44">
      <h2 class="font-bold text-4xl text-center my-12">Skillset</h2>
      <div class="w-full max-w-screen-lg mx-auto h-auto px-8">
        <div
          class="
            text-gray-800
            dark:text-gray-50
            text-center
            md:text-left
            w-full
            px-2
            my-8
            md:mt-12
            md:mb-10
            md:pl-[22px]
          "
        >
          <h1 class="font-bold text-2xl md:text-5xl">
            Frontend Web Development
          </h1>
          <p class="text-lg font-regular mt-3 md:text-2xl">
            I build web interfaces with Vue &amp; TailwindCSS. Beyond that, I
            use HTML/CSS and Javascript.
          </p>
        </div>
        <div
          id="skillset_container_frontend"
          class="
            flex flex-col
            space-y-4
            md:space-y-0
            md:grid md:grid-cols-2 md:grid-rows-2
            md:gap-4
            lg:gap-8
          "
        >
          <skillset-component
            v-for="skill in skills.frontend"
            :key="skill.title"
            v-bind="skill"
          />
        </div>

        <div
          class="
            text-gray-800
            dark:text-gray-50
            text-center
            md:text-left
            w-full
            px-2
            my-8
            md:mt-12
            md:mb-10
            md:pl-[22px]
            xl:mt-24
          "
        >
          <h1 class="font-bold text-2xl md:text-5xl">
            Backend Web Development
          </h1>
          <p class="text-lg font-regular mt-3 md:text-2xl">
            Setting up web servers, APIs, and other general backend
            infrastructure.
          </p>
        </div>
        <div
          id="skillset_container_backend"
          class="
            flex flex-col
            space-y-4
            md:space-y-0
            md:grid md:grid-cols-2 md:grid-rows-2
            md:gap-4
            lg:gap-8
          "
        >
          <skillset-component
            v-for="skill in skills.backend"
            :key="skill.title"
            v-bind="skill"
          />
        </div>
      </div>
    </div>
    <footer-component
      @contactClicked="scrollToForm"
      @mobileNavigationTo="scrollToSection"
    />
    <!-- The y value of the form for footer-component is different than the y value of the form for the top 
    contact-button component. See if it makes a difference with window.scrollto, fix if so.  -->
  </div>
</template>