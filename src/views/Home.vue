<script>
import { defineComponent } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";
import Navbar from "@/components/Navbar.vue";
import ContactButton from "@/components/ContactButton.vue";
import ResumeButton from "@/components/ResumeButton.vue";
import ProjectCard from "@/components/ProjectCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  data() {
    return {
      projects: [
        {
          title: "Benford Roofing",
          description:
            "Static website designed to bring Benford Roofing more clients, in combination with Google ads. ",
          image: "/assets/benfordroofing.png",
          githubLink: "https://github.com/danialhasan/roofing-company",
          caseStudy: "/case-studies/roofingcompany",
          link: "https://benfordroofing.com",
        },
        {
          title: "Crypto API",
          description:
            "This web app uses the CoinMarketCap API to retrieve data regarding 4 cryptocurrencies.",
          image: "/assets/cryptoapi.png",
          githubLink: "https://github.com/danialhasan/cryptoapi",
          caseStudy: "/case-studies/crypto-api",
          link: "https://crypto-api-dh.herokuapp.com/",
        },
        {
          title: "Portfolio Site",
          description:
            "This website (the one you're currently on) displays my portfolio of projects.",
          image: "/assets/portfoliosite.png",
          githubLink: "https://github.com/danialhasan/devsite-vue",
          caseStudy: "/case-studies/portfoliosite",
          link: "https://hasandev.ca",
        },
        {
          title: "Crypto Address Tracer",
          description:
            "A web app built for a business with Vue, Node and MongoDB.",
          image: "/assets/cryptoaddresstracer.png",
          githubLink: "https://github.com/danialhasan/crypto_address_tracer",
          caseStudy:
            "https://www.notion.so/Crypto-Address-Tracer-b261e0660926406e93d1da435a8002f5",
          link: "https://crypto-address-tracer.herokuapp.com/",
        },
      ],
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

      console.log(footer.offsetTop);
      var windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (windowWidth <= 1023) {
        //1023 and not 1024, because of the way Tailwind's media query classes work.
        // focus mobile form
        document.getElementById("mobile_name_input").focus();
        console.log("focused mobile form");
      } else {
        // focus desktop form
        document.getElementById("desktop_name_input").focus();
        console.log("focused desktop form");
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
          console.log("test");
          window.scrollTo({
            top: projects.offsetTop,
            behavior: "smooth",
          });
          break;
        case "skillset":
          console.log("test");

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
          lg:max-w-screen-lg
          mx-auto
          h-auto
          px-4
          md:px-16
          flex flex-col
          lg:flex-row lg:flex-wrap
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
      <!-- Need to redesign and redo this. This part is a temporary placeholder. -->
      <div class="w-full h-auto px-2">
        <div
          class="
            flex flex-col
            md:flex-row
            md:justify-center
            md:pt-4
            md:max-w-screen-sm
            md:mx-auto
            border-soft-black-background
            bg-white
            dark:border-soft-white
            dark:bg-soft-black-foreground
            border-2
          "
        >
          <div class="w-full h-auto md:w-[230px] pt-8 md:p-0">
            <h3 class="text-2xl text-center font-bold">Front End</h3>
            <ul class="pl-8 pt-3 list-inside list-disc">
              <li>Javascript</li>
              <li>
                CSS
                <ul class="list-inside list-disc ml-4">
                  <li>TailwindCSS</li>
                </ul>
              </li>
              <li>HTML</li>
            </ul>
          </div>
          <div class="w-full h-auto md:w-[230px] pt-6 md:p-0">
            <h3 class="text-2xl text-center font-bold">Back End</h3>
            <ul class="pb-8 pl-8 pt-3 list-inside list-disc space-y-5">
              <li>
                Javascript
                <ul class="list-inside list-disc ml-4">
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>VueJS</li>
                </ul>
              </li>
              <li>
                API Integration
                <ul class="list-inside list-disc ml-4">
                  <li>CoinMarketCap</li>
                  <li>Stripe</li>
                  <li>Ethplorer</li>
                </ul>
              </li>
              <li>MongoDB Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer-component
      @contactClicked="scrollToForm"
      @mobileNavigationTo="scrollToSection"
      @articlesClicked="scrollToTop"
    />
    <!-- The y value of the form for footer-component is different than the y value of the form for the top 
    contact-button component. See if it makes a difference with window.scrollto, fix if so.  -->
  </div>
</template>