<script>
import { defineComponent } from "vue";
import ButtonRepo from "@/components/ButtonRepo.vue";
import Navbar from "@/components/Navbar.vue";
import ContactButton from "@/components/ContactButton.vue";
import ResumeButton from "@/components/ResumeButton.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default defineComponent({
  data() {
    return {
      projects: [
        {
          name: "Crypto API",
          description:
            "This web app uses the CoinMarketCap API to retrieve data regarding 4 cryptocurrencies.",
          image: "/assets/cryptoapi.png",
          github: "https://github.com/danialhasan/cryptoapi",
          caseStudy: "/case-studies/crypto-api",
        },
        {
          name: "Portfolio Site",
          description:
            "This website (the one you're currently on) displays my portfolio of projects.",
          image: "/assets/portfoliosite.png",
          github: "https://github.com/danialhasan/devsite-vue",
          caseStudy: "/case-studies/portfoliosite",
        },
        {
          name: "Crypto Address Tracer",
          description:
            "A web app built for a business with Vue, Node and MongoDB.",
          image: "/assets/cryptoaddresstracer.png",
          github: "https://github.com/danialhasan/devsite-vue",
          caseStudy: "/case-studies/portfoliosite",
        },
        {
          name: "Benford Roofing",
          description:
            "Static website designed to bring Benford Roofing more clients, in combination with Google ads. ",
          image: "/assets/benfordroofing.png",
          github: "https://github.com/danialhasan/roofing-company",
          caseStudy: "/case-studies/roofingcompany",
        },
      ],
    };
  },
  components: { ButtonRepo, Navbar, ContactButton, ResumeButton, ProjectCard },
});
</script>

<template>
  <div>
    <navbar />
    <div id="header" class="font-bold text-center w-full h-auto mt-32">
      <h1 class="text-5xl">I'm Danial.</h1>
      <h2 class="text-2xl my-4 px-24">I'm a full stack web developer.</h2>
      <div class="w-full h-auto flex flex-col justify-center mt-12">
        <contact-button />
        <resume-button />
      </div>
      <h4
        class="font-serif text-lg mt-12 flex flex-row justify-center items-center uppercase"
      >
        Available
        <span class="w-4 h-4 rounded-full bg-neon-green ml-2"></span>
      </h4>
    </div>
    <div id="projects" class="w-full h-auto">
      <h2 class="font-bold text-4xl text-center my-12">Projects</h2>
      <div class="w-full h-auto px-4 flex flex-col space-y-10">
        <div v-for="project in this.projects" :key="project">
          <project-card
            :image="project.image"
            :title="project.name"
            :description="project.description"
            :githubLink="project.github"
          />
        </div>
      </div>
    </div>
    <div id="skillset" class="w-full h-auto pt-16">
      <h2 class="font-bold text-4xl text-center my-12">Skillset</h2>
      <!-- Need to redesign and redo this. This part is a temporary placeholder. -->
      <div
        class="border-2 border-soft-black-background bg-white w-full h-auto flex flex-col"
      >
        <div class="w-full h-auto pt-8">
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
        <div class="w-full h-auto pt-6">
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
    <footer class="w-full h-full pt-36">
      <div class="w-full h-auto">
        <h2 class="font-bold text-4xl text-center my-12">Contact Me</h2>

        <div id="form_container" class="w-full h-auto">
          <form
            id="contactForm"
            name="devsite-contact"
            class="flex flex-col w-full h-full px-4 dark:text-black-2"
          >
            <input type="hidden" name="form-name" value="devsite-contact" />

            <label
              for="name"
              class="uppercase font-sans font-bold pb-2 text-black-2 dark:text-white-1"
              >Name</label
            >
            <input
              type="text"
              name="name"
              id="name_input"
              class="transition-all w-full h-12 rounded-lg pl-4 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-form-outline focus:bg-white"
              placeholder="Abel Tesfaye"
              aria-required="false"
            />

            <label
              for="email"
              class="uppercase font-sans font-bold py-2 text-black-2 dark:text-white-1"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email_input"
              class="transition-all w-full h-12 rounded-lg pl-4 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-form-outline focus:bg-white"
              placeholder="zuck@facebook.com"
              required
              aria-required="true"
            />

            <label
              for="message"
              class="uppercase font-sans font-bold py-2 text-black-2 dark:text-white-1"
              >Message</label
            >
            <textarea
              type="text"
              name="message"
              id="message_input"
              class="transition-all w-full h-36 rounded-lg pl-4 pt-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-form-outline focus:bg-white"
              placeholder="Enter your message here..."
              required
              aria-required="true"
            ></textarea>
            <div class="w-full h-auto mt-4">
              <button
                id="form_submit"
                type="submit"
                class="text-soft-white transition-all hover:-mt-1 hover:mb-1 float-right w-44 h-16 bg-accent-3 text-2xl active:bg-opacity-50 text-white-1 rounded-xl"
              >
                Send
              </button>
              <!-- TODO: Add ejs-flash or something to signal to the user that the message was successfully sent. -->
              <!-- TODO: In the near future, replace the button form submit with an axios form submission, to prevent page redirect to /contactform. -->
            </div>
          </form>
        </div>
      </div>
    </footer>
  </div>
</template>