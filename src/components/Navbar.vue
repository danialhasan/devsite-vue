<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      const html = document.getElementsByTagName("html")[0];

      if (localStorage.theme === "light") {
        html.classList.toggle("dark");
        localStorage.theme = "dark";
        this.changeMenuIcon(localStorage.theme);
        window.dispatchEvent(new Event("storage"));
        console.log(
          "%cstorage event dispatched",
          "padding:20px; background-color:cyan; color:black"
        );
        // this will cause a double window.storage event for other pages, but it's fine for just one page like our SPA
      } else {
        html.classList.toggle("dark");
        localStorage.theme = "light";
        this.changeMenuIcon(localStorage.theme);
        window.dispatchEvent(new Event("storage"));
        console.log(
          "%cstorage event dispatched",
          "padding:20px; background-color:cyan; color:black"
        );
        // see above comment.
      }
    },
    toggleMenu() {
      const mobileMenu = document.getElementById("mobile_menu");
      const menuButton = document.getElementById("menu_button");
      const body = document.getElementsByTagName("body")[0];

      mobileMenu.classList.toggle("hidden");
      menuButton.parentElement.classList.toggle("-rotate-45");
      body.classList.toggle("overflow-hidden");
    },
    changeMenuIcon(theme) {
      console.log("changeMenuIcon method run");
      const menuButton = document.getElementById("menu_button");

      if (theme === "dark") {
        menuButton.setAttribute("src", "/assets/menu_light.svg");
        console.log("set attribute to light!");
      } else if (theme === "light") {
        menuButton.setAttribute("src", "/assets/menu_dark.svg");
        console.log("set attribute to dark!");
      }
    },
    openResume() {
      window.open("/assets/dh-resume.pdf", "_blank");
    },
  },
  mounted() {
    console.log(window);
    // window.onstorage = this.changeMenuIcon;
  },
};
</script>
<template>
  <!-- NOTE: The function that is triggered when the parent of this component detects the
'mobileNavigationTo' emit event is different depending on the parent component. It's different in Home.vue and CaseStudies.vue, for example.
Because of this, the code that is run for those two parent components is different.  -->
  <nav
    class="
      max-w-screen-2xl
      mx-auto
      w-full
      h-auto
      pt-12
      xl:pt-0
      flex
      justify-between
      px-5
    "
  >
    <div
      id="logo"
      class="
        xl:hidden
        font-bold font-sans
        text-lg
        dark:text-soft-white
        xl:mt-12
        flex flex-row
        align-middle
      "
    >
      <img
        src="/assets/favicons/favicon-32x32.png"
        class="w-8 h-8 mr-3"
        alt="Logo"
      />

      <p class="flex align-bottom items-end">
        <a href="/">Danial Hasan</a>
      </p>
    </div>
    <div class="xl:hidden transform transition-all z-50">
      <img
        id="menu_button"
        aria-label="menu"
        src="/assets/menu_dark.svg"
        alt="Menu Button"
        @click="toggleMenu()"
      />
    </div>
    <div
      id="mobile_menu"
      class="
        text-soft-white
        mobile_menu
        hidden
        z-50
        fixed
        backdrop-filter backdrop-blur-sm backdrop-brightness-50
        top-0
        left-0
        w-full
        h-full
        bg-opacity-10 bg-black
        text-black-1
        dark:text-soft-white
      "
      @click="toggleMenu()"
    >
      <!-- style="backdrop-filter: blur(15px); adds background blur to element in Chrome, not Safari.
        filter:blur(5px); adds element blur in safari and chrome. 
        -->

      <h2 class="mt-36 mb-8 font-sans text-5xl font-bold underline text-center">
        Quick Links
      </h2>
      <ul
        id="mobile_menu_list"
        @click="toggleMenu()"
        class="text-center font-semibold mb-12 text-4xl"
      >
        <li class="py-2 active:underline">
          <router-link
            @click="toggleMenu"
            :to="{ name: 'Home', hash: '#footer' }"
            >Contact</router-link
          >
        </li>
        <li class="py-2 active:underline">
          <router-link
            @click="toggleMenu"
            :to="{ name: 'Home', hash: '#projects' }"
            >Projects</router-link
          >
        </li>
        <li class="py-2 active:underline">
          <router-link
            @click="toggleMenu"
            :to="{ name: 'Home', hash: '#skillset' }"
            >Skillset</router-link
          >
        </li>
        <li class="py-2 active:underline">
          <a
            @click="
              toggleMenu();
              openResume();
            "
            >Resume</a
          >
        </li>
        <li class="py-2 active:underline">
          <router-link to="/articles" @click="toggleMenu()"
            >Articles</router-link
          >
        </li>
        <li>
          <i
            id="toggle_light_settings"
            class="mt-2 fas fa-swatchbook"
            @click="
              toggleDarkMode();
              toggleMenu();
            "
          ></i>
        </li>
      </ul>
    </div>
    <div
      id="desktop_menu"
      class="hidden xl:flex items-center px-12 w-full h-28 justify-between"
    >
      <div class="font-bold font-sans text-lg flex flex-row align-middle">
        <img src="/assets/favicons/favicon-32x32.png" alt="Logo" />
        <a href="#" class="pl-4 leading-relaxed">Danial Hasan</a>
      </div>
      <div class="flex w-auto h-full">
        <ul class="inline-flex justify-around items-center text-lg font-bold">
          <li class="ml-14 py-2 active:underline">
            <router-link :to="{ name: 'Home', hash: '#footer' }"
              >Contact</router-link
            >
          </li>
          <li class="ml-14 py-2 active:underline">
            <router-link :to="{ name: 'Home', hash: '#projects' }"
              >Projects</router-link
            >
          </li>
          <li class="ml-14 py-2 active:underline">
            <router-link :to="{ name: 'Home', hash: '#skillset' }"
              >Skillset</router-link
            >
          </li>
          <li class="ml-14 py-2 active:underline">
            <router-link :to="{ path: '' }" @click="openResume"
              >Resume</router-link
            >
          </li>
          <li class="ml-14 py-2 active:underline">
            <router-link to="/articles">Articles</router-link>
          </li>
          <li>
            <i
              id="toggle_light_settings"
              class="ml-14 mt-2 fas fa-lg fa-swatchbook hover:cursor-pointer"
              @click="toggleDarkMode()"
            ></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>