<script>
export default {
  name: "Skillset Component",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "Skillset Title Not Found",
    },
    description: {
      type: String,
      default: "Skillset Description Not Found",
    },
    image: {
      type: String,
      default: "Skillset Image Not Found",
    },
    experience: {
      type: Number,
      default: 3,
    },
  },
  methods: {},
};
</script>
<template>
  <div
    class="
      md:max-w-[350px]
      lg:max-w-[420px]
      w-full
      md:justify-self-center
      md:self-center
      border-2 border-black
      bg-white
      dark:border-white
      dark:bg-soft-black-foreground
      shadow-lg
      rounded-2xl
      md:h-full
    "
  >
    <div class="flex flex-col p-7">
      <div class="flex flex-row justify-between">
        <div class="w-[54px] h-[54px] object-cover flex">
          <img :src="this.image" alt="Logo of specified skillset" srcset="" />
        </div>

        <p>{{ this.experience }}+ years of experience</p>
      </div>
      <h3 class="font-semibold text-2xl py-4">{{ this.title }}</h3>
      <p>{{ this.description }}</p>
    </div>
  </div>
</template>