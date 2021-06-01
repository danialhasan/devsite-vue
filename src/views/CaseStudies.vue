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
};
</script>
<template>
  <navbar />
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