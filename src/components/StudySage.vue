<script>
import { defineComponent } from 'vue';
import ButtonRepo from '@/components/ButtonRepo.vue';
import Navbar from '@/components/Navbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import Banner from '@/components/Banner.vue';
import SkillsetComponent from '@/components/SkillsetComponent.vue';

export default defineComponent({
  components: {
    ButtonRepo,
    Navbar,
    FooterComponent,
    Banner,
    SkillsetComponent,
  },
  data() {
    return {};
  },
  methods: {
    scrollToForm() {
      const footer = document.getElementById('footer');
      setTimeout(() => {
        /**
         * Note: The reason this uses a setTimeout function, is because
         * scrolling doesn't work without it whenever theres extra code below it
         * in the function. Currently, the causeis unknown. StackOverflow granted the
         * setTimeout function hack.
         */
        window.scrollTo({
          top: footer.offsetTop,
          behavior: 'smooth',
        });
      }, 50);

      var windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (windowWidth <= 1023) {
        //1023 and not 1024, because of the way Tailwind's media query classes work.
        // focus mobile form
        document.getElementById('mobile_name_input').focus();
      } else {
        // focus desktop form
        document.getElementById('desktop_name_input').focus();
      }
    }, //refactor later, add polyfill
    scrollToSection(section) {
      // This scrolling is to be done after the page has been set to / either through router link or window.location.
      // if using window.location, check window url first to make sure youre not unnecessarily refreshing the page.
      console.log(section); //NOT RUNNING WHEN MOBILE NAVBAR ITEMS CLICKED IN /CASE-STUDIES
      const projects = document.getElementById('projects');
      const skillset = document.getElementById('skillset');
      switch (section) {
        case 'contact':
          this.scrollToForm();
          break;
        case 'projects':
          console.log(window.location.href); //doesn't activate in /case-studies for some reason
          window.scrollTo({
            top: projects.offsetTop,
            behavior: 'smooth',
          });
          break;
        case 'skillset':
          window.scrollTo({
            top: skillset.offsetTop,
            behavior: 'smooth',
          });

          break;
        case 'resume':
          window.open('/assets/dh-resume.pdf', '_blank');
          break;

        default:
          document.getElementById('header').scrollIntoView(true);
          break;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<template>
  <div>
    <banner />
    <navbar @mobileNavigationTo="scrollToSection" />
    <div id="study_sage_container" class="w-full">
      <h1 class="text-5xl font-bold text-center pt-24">StudySage</h1>
      <div class="max-w-xl m-auto pt-8">
        <p class="text-left">
          StudySage is an innovative and versatile online learning and
          assistance tool designed to empower individuals in their educational
          journey. This tool combines the power of artificial intelligence,
          educational guidance, and seamless integration with popular
          productivity platforms like Notion to provide a comprehensive learning
          experience.
        </p>
        <br />
        <p>
          It's a work in progress. Work started Dec/16/2023. More updates to
          this page will be made as the product is fleshed out. Visit my Twitter
          for updates!
        </p>
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
