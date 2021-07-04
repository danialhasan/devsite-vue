<script>
import ContactButton from "@/components/ContactButton.vue";
import ResumeButton from "@/components/ResumeButton.vue";

export default {
  name: "FooterComponent",
  components: {
    ContactButton,
    ResumeButton,
  },
  methods: {
    openResume() {
      window.open("/assets/dh-resume.pdf", "_blank");
    },
  },
  emits: ["clicked", "articlesClicked", "mobileNavigationTo"],
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
            class="contactForm flex flex-col w-full h-full px-4"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="devsite-contact" />

            <label
              for="name"
              class="
                uppercase
                font-sans font-bold
                pb-2
                text-gray-800
                dark:text-gray-50
              "
              >Name</label
            >
            <input
              type="text"
              name="name"
              id="mobile_name_input"
              class="
                text-gray-800
                transition-all
                w-full
                h-12
                rounded-lg
                pl-4
                bg-gray-200
                focus:outline-none
                focus:ring-2 focus:ring-form-outline
                focus:bg-white
              "
              placeholder="Abel Tesfaye"
              aria-required="false"
            />

            <label
              for="email"
              class="
                uppercase
                font-sans font-bold
                py-2
                text-gray-800
                dark:text-gray-50
              "
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email_input"
              class="
                text-gray-800
                w-full
                h-12
                rounded-lg
                pl-4
                bg-gray-200
                focus:outline-none
                focus:ring-2 focus:ring-form-outline
                focus:bg-white
              "
              placeholder="zuck@facebook.com"
              required
              aria-required="true"
            />

            <label
              for="message"
              class="
                uppercase
                font-sans font-bold
                py-2
                text-gray-800
                dark:text-gray-50
              "
              >Message</label
            >
            <textarea
              type="text"
              name="message"
              id="message_input"
              class="
                text-gray-800
                transition-all
                w-full
                h-36
                rounded-lg
                pl-4
                pt-3
                bg-gray-200
                focus:outline-none
                focus:ring-2 focus:ring-form-outline
                focus:bg-white
              "
              placeholder="Enter your message here..."
              required
              aria-required="true"
            ></textarea>
            <div class="w-full h-auto mt-4">
              <button
                id="form_submit"
                type="submit"
                class="
                  text-soft-white
                  transition-all
                  hover:-mt-1
                  hover:mb-1
                  float-right
                  w-44
                  h-16
                  bg-accent-3
                  text-2xl
                  active:bg-opacity-50
                  rounded-xl
                "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="w-full h-auto">
        <div
          class="
            flex flex-col
            w-full
            mt-24
            h-auto
            text-gray-800
            dark:text-gray-50
          "
        >
          <h3
            class="
              mb-8
              text-center
              font-bold font-sans
              text-xl
              lg:text-2xl
              lg:mb-4
            "
          >
            Danial Hasan
          </h3>
          <div class="flex flex-row justify-center w-auto h-auto">
            <a href="https://www.instagram.com/dhasandev" target="_blank"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/insta.png"
                alt="Instagram"
                srcset=""
            /></a>
            <!-- NOTE: IMAGE SRC ATTRIBUTES MUST HAVE /ASSETS AT FRONT, NOT ASSETS, OTHERWISE BUILD WILL FAIL. -->
            <a
              href="https://www.linkedin.com/in/danial-hasan-0bb166182/"
              target="_blank"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/linkedin.png"
                alt="LinkedIn"
                srcset=""
            /></a>
            <a href="https://www.twitter.com/dhasandev" target="_blank"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/twitter.svg"
                alt="Twitter"
                srcset=""
            /></a>
            <a href="https://bitclout.com/u/danialhasan" target="_blank"
              ><img
                class="w-11 h-11 mx-2"
                src="/assets/bitcloutlogo.svg"
                alt="Twitter"
                srcset=""
            /></a>
            <a href="https://www.polywork.com/danialhasan" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-2 w-11 h-11"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M12.7188 36.0635V25.0098H24.2812V29.5307C24.2782 31.2644 23.5873 32.926 22.3604 34.1508C21.1334 35.3756 19.4705 36.0635 17.7369 36.0635H12.7188Z"
                  fill="#88CFB0"
                ></path>
                <path
                  d="M17.7138 37.0001H11.8169V24.0732H25.1831V29.5307C25.1801 31.5108 24.3922 33.4089 22.992 34.809C21.5919 36.2091 19.6938 36.9971 17.7138 37.0001V37.0001ZM13.6785 35.127H17.7138C19.1991 35.127 20.6237 34.5378 21.675 33.4886C22.7263 32.4394 23.3185 31.016 23.3216 29.5307V25.9464H13.6785V35.127Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M24.5587 24.698V12.9736H36.1212V18.1536C36.1227 19.0125 35.9549 19.8632 35.6273 20.6572C35.2996 21.4511 34.8187 22.1726 34.2119 22.7805C33.6051 23.3884 32.8844 23.8706 32.0911 24.1996C31.2977 24.5286 30.4473 24.698 29.5884 24.698H24.5587Z"
                  fill="#F2C94C"
                ></path>
                <path
                  d="M29.5306 25.6346H23.6222V12.0371H37V18.1537C37 20.1357 36.2134 22.0368 34.813 23.4394C33.4125 24.842 31.5127 25.6315 29.5306 25.6346V25.6346ZM25.4953 23.7615H29.5306C31.0159 23.7584 32.4393 23.1662 33.4885 22.1149C34.5376 21.0636 35.1269 19.639 35.1269 18.1537V13.8755H25.4953V23.7615Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M24.2465 12.9736H12.7418V24.698H24.2465V12.9736Z"
                  fill="#BD83CE"
                ></path>
                <path
                  d="M25.1831 25.6346H11.8169V12.0371H25.1831V25.6346ZM13.6206 23.7615H23.2638V13.8755H13.6785L13.6206 23.7615Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M0.936523 12.7187V7.46934C0.936523 5.73673 1.6248 4.07508 2.84994 2.84994C4.07508 1.6248 5.73673 0.936523 7.46934 0.936523H12.4412V12.7187H0.936523Z"
                  fill="#40BE88"
                ></path>
                <path
                  d="M13.3778 13.5975H0V7.46938C0.00305802 5.48931 0.79099 3.59122 2.19111 2.19111C3.59122 0.79099 5.48931 0.00305802 7.46938 0L13.3778 0V13.5975ZM1.87313 11.7244H11.5625V1.87313H7.46938C5.98516 1.87313 4.56173 2.46273 3.51223 3.51223C2.46273 4.56173 1.87313 5.98516 1.87313 7.46938V11.7244Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M24.5587 12.7187V0.936523H29.5306C31.2632 0.936523 32.9248 1.6248 34.15 2.84994C35.3751 4.07508 36.0634 5.73673 36.0634 7.46934V12.7187H24.5587Z"
                  fill="#FF7474"
                ></path>
                <path
                  d="M37 13.5975H23.6222V0H29.5306C31.5107 0.00305802 33.4088 0.79099 34.8089 2.19111C36.209 3.59122 36.9969 5.48931 37 7.46938V13.5975ZM25.4953 11.7244H35.1269V7.46938C35.1269 5.98516 34.5373 4.56173 33.4878 3.51223C32.4383 2.46273 31.0148 1.87313 29.5306 1.87313H25.4953V11.7244Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M24.2465 0.936523H12.7418V12.6609H24.2465V0.936523Z"
                  fill="#6776F9"
                ></path>
                <path
                  d="M25.1831 13.5975H11.8169V0H25.1831V13.5975ZM13.6206 11.7244H23.2638V1.87313H13.6785L13.6206 11.7244Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M0.936523 29.5307V25.0098H12.499V36.0635H7.46934C5.73673 36.0635 4.07508 35.3752 2.84994 34.1501C1.6248 32.925 0.936523 31.2633 0.936523 29.5307V29.5307Z"
                  fill="#37C2E2"
                ></path>
                <path
                  d="M13.3778 37.0001H7.46938C5.48931 36.9971 3.59122 36.2091 2.19111 34.809C0.79099 33.4089 0.00305802 31.5108 0 29.5307L0 24.0732H13.3778V37.0001ZM1.87313 25.9464V29.5307C1.87313 31.015 2.46273 32.4384 3.51223 33.4879C4.56173 34.5374 5.98516 35.127 7.46938 35.127H11.5625V25.9464H1.87313Z"
                  fill="#2F2F3A"
                ></path>
                <path
                  d="M12.4412 12.9736H0.936523V24.698H12.4412V12.9736Z"
                  fill="#F2994A"
                ></path>
                <path
                  d="M13.3778 25.6346H0V12.0371H13.3778V25.6346ZM1.87313 23.7615H11.5625V13.8755H1.87313V23.7615Z"
                  fill="#2F2F3A"
                ></path>
                <defs></defs>
              </svg>
            </a>
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
            blockchain programming and DeFi.
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
          <li>
            <router-link :to="{ name: 'Home', hash: '#footer' }"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Home', hash: '#projects' }"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Home', hash: '#skillset' }"
              >Skillset</router-link
            >
          </li>
          <li @click="openResume()">
            <router-link :to="{ path: '' }" @click="openResume()"
              >Resume</router-link
            >
          </li>
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
            class="flex flex-col w-full h-auto text-gray-800 dark:text-gray-50"
          >
            <h3
              class="
                mb-8
                text-center
                font-bold font-sans
                text-xl
                lg:text-2xl
                lg:mb-4
              "
            >
              Danial Hasan
            </h3>
            <div class="flex flex-row justify-center w-auto h-auto">
              <a href="https://www.instagram.com/dhasandev" target="_blank"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/insta.png"
                  alt="Instagram"
                  srcset=""
              /></a>
              <!-- NOTE: IMAGE SRC ATTRIBUTES MUST HAVE /ASSETS AT FRONT, NOT ASSETS, OTHERWISE BUILD WILL FAIL. -->
              <a
                href="https://www.linkedin.com/in/danial-hasan-0bb166182/"
                target="_blank"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  srcset=""
              /></a>
              <a href="https://www.twitter.com/dhasandev" target="_blank"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/twitter.svg"
                  alt="Twitter"
                  srcset=""
              /></a>
              <a href="https://bitclout.com/u/danialhasan" target="_blank"
                ><img
                  class="w-11 h-11 mx-2"
                  src="/assets/bitcloutlogo.svg"
                  alt="Twitter"
                  srcset=""
              /></a>
              <a href="https://www.polywork.com/danialhasan" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-2 w-11 h-11"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M12.7188 36.0635V25.0098H24.2812V29.5307C24.2782 31.2644 23.5873 32.926 22.3604 34.1508C21.1334 35.3756 19.4705 36.0635 17.7369 36.0635H12.7188Z"
                    fill="#88CFB0"
                  ></path>
                  <path
                    d="M17.7138 37.0001H11.8169V24.0732H25.1831V29.5307C25.1801 31.5108 24.3922 33.4089 22.992 34.809C21.5919 36.2091 19.6938 36.9971 17.7138 37.0001V37.0001ZM13.6785 35.127H17.7138C19.1991 35.127 20.6237 34.5378 21.675 33.4886C22.7263 32.4394 23.3185 31.016 23.3216 29.5307V25.9464H13.6785V35.127Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M24.5587 24.698V12.9736H36.1212V18.1536C36.1227 19.0125 35.9549 19.8632 35.6273 20.6572C35.2996 21.4511 34.8187 22.1726 34.2119 22.7805C33.6051 23.3884 32.8844 23.8706 32.0911 24.1996C31.2977 24.5286 30.4473 24.698 29.5884 24.698H24.5587Z"
                    fill="#F2C94C"
                  ></path>
                  <path
                    d="M29.5306 25.6346H23.6222V12.0371H37V18.1537C37 20.1357 36.2134 22.0368 34.813 23.4394C33.4125 24.842 31.5127 25.6315 29.5306 25.6346V25.6346ZM25.4953 23.7615H29.5306C31.0159 23.7584 32.4393 23.1662 33.4885 22.1149C34.5376 21.0636 35.1269 19.639 35.1269 18.1537V13.8755H25.4953V23.7615Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M24.2465 12.9736H12.7418V24.698H24.2465V12.9736Z"
                    fill="#BD83CE"
                  ></path>
                  <path
                    d="M25.1831 25.6346H11.8169V12.0371H25.1831V25.6346ZM13.6206 23.7615H23.2638V13.8755H13.6785L13.6206 23.7615Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M0.936523 12.7187V7.46934C0.936523 5.73673 1.6248 4.07508 2.84994 2.84994C4.07508 1.6248 5.73673 0.936523 7.46934 0.936523H12.4412V12.7187H0.936523Z"
                    fill="#40BE88"
                  ></path>
                  <path
                    d="M13.3778 13.5975H0V7.46938C0.00305802 5.48931 0.79099 3.59122 2.19111 2.19111C3.59122 0.79099 5.48931 0.00305802 7.46938 0L13.3778 0V13.5975ZM1.87313 11.7244H11.5625V1.87313H7.46938C5.98516 1.87313 4.56173 2.46273 3.51223 3.51223C2.46273 4.56173 1.87313 5.98516 1.87313 7.46938V11.7244Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M24.5587 12.7187V0.936523H29.5306C31.2632 0.936523 32.9248 1.6248 34.15 2.84994C35.3751 4.07508 36.0634 5.73673 36.0634 7.46934V12.7187H24.5587Z"
                    fill="#FF7474"
                  ></path>
                  <path
                    d="M37 13.5975H23.6222V0H29.5306C31.5107 0.00305802 33.4088 0.79099 34.8089 2.19111C36.209 3.59122 36.9969 5.48931 37 7.46938V13.5975ZM25.4953 11.7244H35.1269V7.46938C35.1269 5.98516 34.5373 4.56173 33.4878 3.51223C32.4383 2.46273 31.0148 1.87313 29.5306 1.87313H25.4953V11.7244Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M24.2465 0.936523H12.7418V12.6609H24.2465V0.936523Z"
                    fill="#6776F9"
                  ></path>
                  <path
                    d="M25.1831 13.5975H11.8169V0H25.1831V13.5975ZM13.6206 11.7244H23.2638V1.87313H13.6785L13.6206 11.7244Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M0.936523 29.5307V25.0098H12.499V36.0635H7.46934C5.73673 36.0635 4.07508 35.3752 2.84994 34.1501C1.6248 32.925 0.936523 31.2633 0.936523 29.5307V29.5307Z"
                    fill="#37C2E2"
                  ></path>
                  <path
                    d="M13.3778 37.0001H7.46938C5.48931 36.9971 3.59122 36.2091 2.19111 34.809C0.79099 33.4089 0.00305802 31.5108 0 29.5307L0 24.0732H13.3778V37.0001ZM1.87313 25.9464V29.5307C1.87313 31.015 2.46273 32.4384 3.51223 33.4879C4.56173 34.5374 5.98516 35.127 7.46938 35.127H11.5625V25.9464H1.87313Z"
                    fill="#2F2F3A"
                  ></path>
                  <path
                    d="M12.4412 12.9736H0.936523V24.698H12.4412V12.9736Z"
                    fill="#F2994A"
                  ></path>
                  <path
                    d="M13.3778 25.6346H0V12.0371H13.3778V25.6346ZM1.87313 23.7615H11.5625V13.8755H1.87313V23.7615Z"
                    fill="#2F2F3A"
                  ></path>
                  <defs></defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full h-auto px-4 text-left text-lg">
          <h3 class="font-bold mb-3 mt-12">About</h3>
          <div class="text-left font-normal flex flex-col space-y-6">
            <p>
              I'm a full stack Javascript web developer, and I've been
              programming for the web for the last 3 years.
            </p>
            <p>
              When I'm not writing code, I'm writing articles and
              <span class="italic font-semibold">
                <a href="https://dh.hashnode.dev/" target="_blank"
                  >documenting my progress online
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg> </a
              ></span>
              as a developer.
            </p>
            <p>
              I like to learn new things by building projects, breaking things
              apart to see how they work, and then putting them back together.
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
              class="contactForm flex flex-col w-full h-full dark:text-gray-800"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="devsite-contact" />

              <label
                for="name"
                class="
                  uppercase
                  font-sans font-bold
                  pb-2
                  text-gray-800
                  dark:text-gray-50
                "
                >Name</label
              >
              <input
                type="text"
                name="name"
                id="desktop_name_input"
                class="
                  dark:text-gray-800
                  transition-all
                  w-full
                  h-12
                  rounded-lg
                  pl-4
                  bg-gray-200
                  focus:outline-none
                  focus:ring-2 focus:ring-form-outline
                  focus:bg-white
                "
                placeholder="Abel Tesfaye"
                aria-required="false"
              />

              <label
                for="email"
                class="
                  uppercase
                  font-sans font-bold
                  py-2
                  text-gray-800
                  dark:text-gray-50
                "
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email_input"
                class="
                  dark:text-gray-800
                  transition-all
                  w-full
                  h-12
                  rounded-lg
                  pl-4
                  bg-gray-200
                  focus:outline-none
                  focus:ring-2 focus:ring-form-outline
                  focus:bg-white
                "
                placeholder="zuck@facebook.com"
                required
                aria-required="true"
              />

              <label
                for="message"
                class="
                  uppercase
                  font-sans font-bold
                  py-2
                  text-gray-800
                  dark:text-gray-50
                "
                >Message</label
              >
              <textarea
                type="text"
                name="message"
                id="message_input"
                class="
                  dark:text-gray-800
                  transition-all
                  w-full
                  h-36
                  rounded-lg
                  pl-4
                  pt-3
                  bg-gray-200
                  focus:outline-none
                  focus:ring-2 focus:ring-form-outline
                  focus:bg-white
                "
                placeholder="Enter your message here..."
                required
                aria-required="true"
              ></textarea>
              <div class="w-full h-auto mt-4">
                <button
                  id="form_submit"
                  type="submit"
                  class="
                    text-soft-white
                    transition-all
                    hover:-mt-1
                    hover:mb-1
                    float-right
                    w-44
                    h-16
                    bg-accent-3
                    text-2xl
                    active:bg-opacity-50
                    rounded-xl
                  "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="w-full text-center pb-16">
          <ul
            class="
              text-center
              w-full
              justify-between
              flex flex-row
              mt-4
              xl:mt-8
              font-semibold
              text-xl
            "
          >
            <li>
              <router-link :to="{ name: 'Home', hash: '#footer' }"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Home', hash: '#projects' }"
                >Projects</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Home', hash: '#skillset' }"
                >Skillset</router-link
              >
            </li>
            <li @click="openResume()">
              <router-link :to="{ path: '' }" @click="openResume()"
                >Resume</router-link
              >
            </li>
            <li>
              <router-link to="/articles" @click="$emit('articlesClicked')">
                Articles
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>