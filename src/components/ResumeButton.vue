<script>
export default {
  methods: {
    navigate(url, target) {
      window.open(url, target);
    },
  },
  computed: {
    darkModeActive() {
      if (localStorage.theme === "dark") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<template>
  <button
    @click="this.navigate('/assets/dh-resume.pdf', '_blank')"
    class="
      mx-auto
      w-44
      h-16
      mt-2
      lg:my-0
      lg:mx-2
      border-accent-1 border-2
      text-2xl text-black-2
      rounded-xl
      flex
      justify-center
      items-center
      transition-all
      hover:-mt-1
    "
  >
    <span class="w-6 h-6 mr-2">
      <!-- <img
        id="resume_download_icon_1"
        :src="
          darkModeActive
            ? '/assets/download_light.svg'
            : '/assets/download_dark.svg'
        "
        alt="Download Resume icon"
        srcset=""
      /> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        :stroke="darkModeActive ? 'rgb(255,255,255)' : 'rgb(0,0,0)'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <!--
      We need to change the resume download icon image depending on
      if dark mode is currently enabled. Since we're going to use
      localstorage to store our users dark mode preferences, we'll
      consult that for the current dark mode status. That will use a 
      ternary operator to set the image different depending on 
      dark mode mode. 

      -->
    </span>
    <p class="text-black-2 dark:text-white-1">Resume</p>
  </button>
</template>