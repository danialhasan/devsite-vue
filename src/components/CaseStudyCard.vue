<script>
export default {
  props: {
    id: {
      type: Number,
      default: -1,
    },
    heroImage: {
      type: String,
      default: "assets/404image.jpg",
      required: false,
    },
    title: {
      type: String,
      default: "No Title Given",
      required: true,
    },
    description: {
      type: String,
      default: "No Description Given",
      required: true,
    },
    date: {
      type: String,
      default: "2020-01-01",
      required: true,
    },
    routerLink: {
      type: String,
      default: "/404",
      required: true,
    },
  },
};
</script>
<template>
  <div>
    <!-- For mobile cards, use the cards from benford roofing codebase and restyle it.
  Alter accordingly for desktop responsiveness. -->
    <router-link :to="routerLink">
      <div
        class="w-auto lg:w-[360px] my-4 border-2 border-soft-black h-auto lg:flex lg:flex-col xl:mr-6"
      >
        <!-- image -->
        <div class="w-full h-1/2 lg:h-[212px] overflow-hidden mx-auto">
          <img
            :src="heroImage"
            class="w-full h-full lg:h-full object-center object-cover"
            alt=""
            srcset=""
          />
        </div>
        <!-- text -->
        <div class="w-full h-1/2 lg:h-auto flex flex-col px-6 py-4 space-y-2">
          <span
            class="text-xs leading-loose text-soft-black-foreground opacity-80 font-bold"
            >POSTED {{ date }}</span
          >
          <h3 class="font-bold text-base">
            {{ title }}
          </h3>
          <p class="font-normal text-sm">
            {{ description }}
          </p>
          <!-- <div class="mb-6 lg:mb-0 lg:relative lg:bottom-0 lg:p-0">
          <contact-button />
        </div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>