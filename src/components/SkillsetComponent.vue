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
  <div>
    <div class="border-2 border-black flex flex-col">
      <div class="flex flex-row">
        <div class="w-[54px] h-[54px] border border-black object-cover flex">
          <img :src="this.image" alt="" srcset="" />
        </div>
        <p class="border border-red-300">{{ this.experience }}</p>
      </div>
      <h3 class="font-semibold text-2xl">{{ this.title }}</h3>
      <p>{{ this.description }}</p>
    </div>
  </div>
</template>