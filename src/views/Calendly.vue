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
  mounted() {
    try {
      document.body.onload = this.loadCalendly();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    loadCalendly() {
      document.title = "Danial's Calendly";
      const script = document.createElement('script');
      const calendlyElement = document.getElementById('calendly_element');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      document.head.append(script);
      calendlyElement.innerHTML = `<div class="calendly-inline-widget" data-url="https://calendly.com/danial_hasan/30min" style="min-width:320px;height:630px;"></div>`;
    },
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
    <div id="calendly_element"></div>
    <footer-component
      @contactClicked="scrollToForm"
      @mobileNavigationTo="scrollToSection"
    />
    <!-- The y value of the form for footer-component is different than the y value of the form for the top 
    contact-button component. See if it makes a difference with window.scrollto, fix if so.  -->
  </div>
</template>
