<script>
export default {
  props: {
    image: {
      type: String,
      default: "./assets/404image.jpg", //test this
    },
    title: {
      type: String,
      default: "No Title Given",
    },
    description: {
      type: String,
      default: "No description Given",
    },
    caseStudy: {
      type: String,
      default: "/404",
    },
    githubLink: {
      type: String,
      default: "/404",
    },
  },
  methods: {},
};
</script>
<template>
  <div class="border-2 border-soft-black-background flex flex-col">
    <div class="w-full h-1/2">
      <img
        class="w-full h-full"
        :src="this.image"
        alt="Project card image"
        srcset=""
      />
    </div>
    <div class="w-full h-1/2 py-4 px-6 bg-white">
      <p class="text-2xl font-bold">{{ this.title }}</p>
      <p class="text-md py-2">{{ this.description }}</p>
      <div class="flex flex-row w-full h-auto pt-4">
        <button
          class="uppercase bg-soft-black-foreground text-soft-white px-6 py-2 rounded-lg"
        >
          More Info
        </button>
        <a target="_blank" :href="this.githubLink">
          <button
            class="uppercase text-soft-black-foreground border-2 border-soft-black-background px-6 py-2 rounded-lg ml-6"
          >
            Github
          </button>
        </a>
      </div>
    </div>
  </div>
</template>