<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      const html = document.getElementsByTagName("html")[0];
      html.classList.toggle("dark");
    },
    toggleMenu() {
      var mobileMenu = document.getElementById("mobile_menu");
      var menuButton = document.getElementById("menu_button");
      const body = document.getElementsByTagName("body")[0];

      mobileMenu.classList.toggle("hidden");
      menuButton.parentElement.classList.toggle("-rotate-45");
      body.classList.toggle("overflow-hidden");
    },
  },
};
</script>
<template>
  <nav class="w-full h-auto pt-12 xl:pt-0 flex justify-between px-5">
    <div
      id="logo"
      class="xl:hidden font-bold font-sans text-lg dark:text-white-1 xl:mt-12"
    >
      <p><a href="/">Danial Hasan</a></p>
    </div>
    <!-- ^ 'logo' -->
    <div
      id="mobile_menu"
      class="mobile_menu hidden z-50 fixed backdrop-filter backdrop-blur-sm top-0 left-0 w-full h-full bg-opacity-10 bg-black text-black-1 dark:text-white-1"
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
        class="text-center font-semibold mb-12 text-4xl"
      >
        <li class="py-2 navListChild active:underline">
          <a href="#form_container" @click="autofocusForm()">Contact</a>
        </li>
        <li class="py-2 navListChild active:underline">
          <a href="#projects_section">Projects</a>
        </li>
        <li class="py-2 navListChild active:underline">
          <a href="#skillset_section">Skillset</a>
        </li>
        <li class="py-2 navListChild active:underline">
          <a href="#projects_section">Resume</a>
        </li>
        <li>
          <i
            id="toggle_light_settings"
            class="mt-2 fas fa-swatchbook"
            @click="toggleLightSettings()"
          ></i>
        </li>
      </ul>
    </div>
    <div
      id="desktop_menu"
      class="hidden xl:flex items-center px-12 w-full h-28 justify-between dark:text-white-1"
    >
      <div class="font-bold font-sans text-lg flex flex-row align-middle">
        <img src="/assets/favicons/favicon-32x32.png" alt="Logo" />
        <a href="#" class="pl-4 leading-relaxed">Danial Hasan</a>
      </div>
      <div class="flex w-auto h-full">
        <ul class="inline-flex justify-around items-center text-lg font-bold">
          <li
            class="ml-14 hover:text-black dark:hover:text-white hover:underline"
          >
            <a href="#form_container" @click="autofocusForm()">Contact</a>
          </li>
          <li
            class="ml-14 hover:text-black dark:hover:text-white hover:underline"
          >
            <a href="#projects_section">Projects</a>
          </li>
          <li
            class="ml-14 hover:text-black dark:hover:text-white hover:underline"
          >
            <a href="#skillset_section">Skillset</a>
          </li>
          <li
            class="ml-14 hover:text-black dark:hover:text-white hover:underline"
          >
            <a href="#projects_section">Resume</a>
          </li>
          <li>
            <i
              id="toggle_light_settings"
              class="cursor-pointer ml-14 fas fa-swatchbook fa-lg"
              @click="toggleLightSettings()"
            ></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="xl:hidden transform transition-all z-50">
      <img
        id="menu_button"
        aria-label="menu"
        src="/assets/menu_dark.svg"
        alt="Menu Button"
        @click="toggleMenu()"
      />
      <!-- TODO: Switch the src attr of this with the dark mode menu, when dark mode is activated. -->
    </div>
  </nav>
</template>