<script>
import ContactButton from "@/components/ContactButton.vue";
import ResumeButton from "@/components/ResumeButton.vue";

export default {
  name: "FooterComponent",
  components: {
    ContactButton,
    ResumeButton,
  },
  emits: ["clicked", "caseStudiesClicked", "mobileNavigationTo"],
};
</script>

<template>
  <footer id="footer" class="w-full h-full mt-24">
    <div id="mobile_footer" class="lg:hidden">
      <div class="w-full h-auto">
        <h2 class="font-bold text-4xl text-center my-12">Contact Me</h2>
        <div id="form_container" class="w-full h-auto">
          <form
            id="mobile_footer"
            name="devsite-contact"
            class="contactForm flex flex-col w-full h-full px-4 dark:text-black-2"
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
              id="mobile_name_input"
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
            </div>
          </form>
        </div>
      </div>
      <div class="w-full h-auto">
        <div
          class="flex flex-col w-full mt-24 h-auto text-black-2 dark:text-white-1"
        >
          <h3
            class="mb-8 text-center font-bold font-sans text-xl lg:text-2xl lg:mb-4"
          >
            Danial Hasan
          </h3>
          <div class="flex flex-row justify-center w-auto h-auto">
            <a href="https://www.instagram.com/dhasandev"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/insta.svg"
                alt="Instagram"
                srcset=""
            /></a>
            <!-- NOTE: IMAGE SRC ATTRIBUTES MUST HAVE /ASSETS AT FRONT, NOT ASSETS, OTHERWISE BUILD WILL FAIL. -->
            <a href="https://www.linkedin.com/in/danial-hasan-0bb166182/"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/linkedin.png"
                alt="LinkedIn"
                srcset=""
            /></a>
            <a href="https://www.twitter.com/dhasandev"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/twitter.svg"
                alt="Twitter"
                srcset=""
            /></a>
          </div>
        </div>
      </div>
      <div class="w-full h-auto px-4 text-left text-lg">
        <h3 class="font-bold mb-3 mt-12">About</h3>
        <div class="text-left font-normal flex flex-col space-y-6">
          <p>
            I first learned about web development at the age of 12, intrigued by
            computers.
          </p>
          <p>
            That led me to pursue web technologies and I started freelance web
            development as a student throughout school.
          </p>
          <p>
            Currently, I stay updated on web trends while pursuing topics like
            blockchain programming and DeFi. Currently available for hire.
          </p>
          <p class="text-red-500">Currently available for hire.</p>
        </div>
      </div>
      <div class="w-full h-auto flex flex-col my-12">
        <contact-button @clicked="$emit('contactClicked')" />
        <resume-button />
      </div>
      <div class="w-full flex flex-col text-center pb-16">
        <h4 class="font-bold text-2xl my-6 underline">Quick Links</h4>
        <ul
          class="text-center flex flex-col space-y-2 mt-4 font-semibold text-xl"
        >
          <li>Contact</li>
          <li>Projects</li>
          <li>Skillset</li>
          <li @click="$emit('mobileNavigationTo', 'resume')">Resume</li>
          <li>
            <router-link
              to="/case-studies"
              @click="$emit('caseStudiesClicked')"
            >
              Case Studies
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="desktop_footer"
      class="hidden lg:flex justify-center xl:max-w-screen-xl xl:mx-auto w-full"
    >
      <div id="footer_left" class="w-1/2 flex flex-col px-8">
        <div class="w-full h-auto">
          <div
            class="flex flex-col w-full h-auto text-black-2 dark:text-white-1"
          >
            <h3
              class="mb-8 text-center font-bold font-sans text-xl lg:text-2xl lg:mb-4"
            >
              Danial Hasan
            </h3>
            <div class="flex flex-row justify-center w-auto h-auto">
              <a href="https://www.instagram.com/dhasandev"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/insta.svg"
                  alt="Instagram"
                  srcset=""
              /></a>
              <a href="https://www.linkedin.com/in/danial-hasan-0bb166182/"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  srcset=""
              /></a>
              <a href="https://www.twitter.com/dhasandev"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/twitter.svg"
                  alt="Twitter"
                  srcset=""
              /></a>
            </div>
          </div>
        </div>
        <div class="w-full h-auto px-4 text-left text-lg">
          <h3 class="font-bold mb-3 mt-12">About</h3>
          <div class="text-left font-normal flex flex-col space-y-6">
            <p>
              I first learned about web development at the age of 12, intrigued
              by computers.
            </p>
            <p>
              That led me to pursue web technologies and I started freelance web
              development as a student throughout school.
            </p>
            <p>
              Currently, I stay updated on web trends while pursuing topics like
              blockchain programming and DeFi. Currently available for hire.
            </p>
            <p class="text-red-500">Currently available for hire.</p>
          </div>
        </div>
        <div class="flex flex-row justify-center mt-8 w-full h-auto">
          <contact-button @clicked="$emit('clicked')" />
          <resume-button />
        </div>
      </div>
      <div id="footer_right" class="w-1/2 flex flex-col px-8">
        <div class="w-full h-auto">
          <h2 class="font-bold text-4xl text-center mb-12">Contact Me</h2>
          <div id="form_container" class="w-full h-auto">
            <form
              id="desktop_footer"
              name="devsite-contact"
              class="contactForm flex flex-col w-full h-full dark:text-black-2"
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
                id="desktop_name_input"
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
        <div class="w-full text-center pb-16">
          <ul
            class="text-center w-full justify-between flex flex-row mt-4 xl:mt-8 font-semibold text-xl"
          >
            <li><a href="/">Contact</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Skillset</a></li>
            <li><a href="/">Resume</a></li>
            <li><a href="/">Case Studies</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>