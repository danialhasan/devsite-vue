<script>
import Navbar from "@/components/Navbar.vue";
import CaseStudyCard from "@/components/CaseStudyCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    Navbar,
    CaseStudyCard,
    FooterComponent,
  },
  methods: {
    scrollToSection(section) {
      if (this.$route.path == "/case-studies") {
        this.$router.push("12345"); //doesn't work if the element triggering this is an <a> tag with an href.
      }
      const projects = document.getElementById("projects");
      const skillset = document.getElementById("skillset");
      switch (section) {
        case "contact":
          this.scrollToForm();
          break;
        case "projects":
          console.log(window.location.href); //doesn't activate in /case-studies for some reason
          console.log("test");
          window.scrollTo({
            top: projects.offsetTop,
            behavior: "smooth",
          });
          break;
        case "skillset":
          console.log("test");

          window.scrollTo({
            top: skillset.offsetTop,
            behavior: "smooth",
          });

          break;
        case "resume":
          window.open("/assets/dh-resume.pdf", "_blank");
          break;

        default:
          document.getElementById("header").scrollIntoView(true);
          break;
      }
    },
  },
};
</script>
<template>
  <navbar @mobileNavigationTo="scrollToSection" />
  <h2 class="font-bold font-sans text-3xl text-center mt-16">Case Studies</h2>
  <!-- <div id="case_study_container" class="w-full h-full">
    <case-study-card
      v-for="casestudy in this.caseStudies"
      v-bind="casestudy"
      :key="casestudy.id"
    /> -->
  <router-view></router-view>
  <!-- </div> -->
  <!-- commented out footer until we're done the caseStudyCard component -->
  <footer-component />
</template>