<script>
import Navbar from "@/components/Navbar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    Navbar,
    ArticleCard,
    FooterComponent,
  },
  methods: {
    async scrollToSection(section) {
      //doesn't work if the element triggering this function  is an <a> tag with an href.
      console.log(this.$route.path);
      this.$router.go(-1);
      console.log(this.$route.path);
      const projects = document.getElementById("projects");
      const skillset = document.getElementById("skillset");

      // switch (section) {
      //   case "contact":
      //     this.scrollToForm();
      //     break;

      //   case "projects":
      //     window.scrollTo({
      //       top: projects.offsetTop,
      //       behavior: "smooth",
      //     });
      //     console.log("Scrolled to projects");
      //     break;

      //   case "skillset":
      //     window.scrollTo({
      //       top: skillset.offsetTop,
      //       behavior: "smooth",
      //     });
      //     console.log("Scrolled to skillset");
      //     break;

      //   case "resume":
      //     window.open("/assets/dh-resume.pdf", "_blank");
      //     break;

      //   default:
      //     document.getElementById("header").scrollIntoView(true);
      //     break;
      // }
    },
  },
};
</script>
<template>
  <navbar />
  <h2 class="font-bold font-sans text-3xl text-center mt-16">Articles</h2>
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