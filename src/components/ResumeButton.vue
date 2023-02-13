<script>
export default {
    methods: {
        navigate(url, target) {
            window.open(url, target);
            console.log('navigate method called');
        },
        changeResumeIcon() {
            const icons = document.getElementsByClassName('resumeIcon');
            /* listen for changes to windows' localstorage.
             * onstorage event is dispatched on source page where localstorage change was made, but not detected on it.
             * it's only detected on other pages, mainly to sync their stuff with localstorage when it changes.
             */

            if (localStorage.theme === 'dark') {
                for (let i = 0; i < icons.length; i++) {
                    let icon = icons[i];
                    icon.setAttribute('stroke', 'rgb(255,255,255)');
                }
            } else if (localStorage.theme === 'light') {
                for (let i = 0; i < icons.length; i++) {
                    let icon = icons[i];
                    icon.setAttribute('stroke', 'rgb(0,0,0)');
                }
            }
        },
    },
    mounted() {
        this.changeResumeIcon();
        window.onstorage = this.changeResumeIcon;
    },
};
</script>

<template>
    <button
        @click="this.navigate('/assets/DanialHasan_Resume.pdf', '_blank')"
        class="mx-auto w-44 h-16 mt-2 lg:my-0 lg:mx-2 border-accent-1 border-2 text-2xl text-black-2 rounded-xl flex justify-center items-center transition-all hover:-mt-1"
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
                class="resumeIcon"
                stroke="rgb(0,0,0)"
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
