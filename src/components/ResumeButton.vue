<script>
export default {
  methods: {
    navigate(url, target) {
      window.open(url, target);
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
    <span class="w-5 h-5 mr-2">
      <img
        id="resume_download_icon_1"
        src="/assets/download_light.svg"
        alt="Download Resume icon"
        srcset=""
      />
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