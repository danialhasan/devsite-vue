<script>
import CaseStudyCard from "./CaseStudyCard.vue";

export default {
  name: "Case Study Card Container",
  data() {
    return {
      caseStudiesData: [
        {
          id: 0,
          heroImage: undefined,
          title:
            "This is the data in the this.Title prop. This is a new article, detailing random details about several cars.",
          description:
            "This is the data within the this.Description prop. It’s a short description of the case study designed to get a reader to click and start reading the body.",
          date: "2015-05-29",
          routerLink: "/case-studies/casestudy/BenfordRoofingCaseStudy",
        },
        {
          id: 1,
          heroImage: undefined,
          title: "Example Case Study 1",
          description: "This is an example case study data object.",
          date: "2015-05-29",
          routerLink: "/case-studies/casestudy/CryptoAPICaseStudy",
        },
      ], // where case study articles will go
    };
  },
  components: {
    CaseStudyCard,
  },
};
</script>
<template>
  <div
    class="w-full h-full lg:flex lg:flex-row lg:justify-evenly lg:h-auto max-w-screen-lg mx-auto mb-24 px-4"
  >
    <case-study-card
      v-for="caseStudy in this.caseStudiesData"
      :key="caseStudy.id"
      v-bind="caseStudy"
    />
  </div>
</template>