<script>
export default {
  data() {
    return { link: "", date: "" };
  },
  props: {
    coverImage: {
      type: String,
      default: "assets/404image.jpg",
      required: false,
    },
    title: {
      type: String,
      default: "No Title Given",
      required: true,
    },
    brief: {
      type: String,
      default: "No Description Given",
      required: true,
    },
    slug: { type: String },
    dateAdded: {
      type: String,
      default: "2020-01-01",
      required: true,
    },
  },
  methods: {
    setLink() {
      this.link = "https://dh.hashnode.dev/" + this.slug;
    },
    setDate() {
      this.date = this.dateAdded.substring(0, 10);

      console.log(this.date);
    },
  },
  created() {
    this.setLink();
    this.setDate();
  },
};
</script>
<template>
  <div>
    <a :href="this.link" target="_blank">
      <!-- need to get this links href to be dh.hashnode.dev/this.slug somehow -->
      <div
        class="
          w-auto
          lg:w-[360px]
          my-4
          border-2 border-soft-black
          h-auto
          lg:flex lg:flex-col
          xl:mr-6
        "
      >
        <!-- image -->
        <div class="w-full h-1/2 lg:h-[212px] overflow-hidden mx-auto">
          <img
            :src="coverImage"
            class="w-full h-full lg:h-full object-center object-cover"
            alt=""
            srcset=""
          />
        </div>
        <!-- text -->
        <div
          class="
            bg-white
            dark:bg-soft-black-foreground
            w-full
            h-1/2
            lg:h-auto
            flex flex-col
            px-6
            py-4
            space-y-2
          "
        >
          <span
            class="
              text-xs
              leading-loose
              text-soft-black-foreground
              dark:text-soft-white
              dark:opacity-95
              opacity-80
              font-bold
            "
            >POSTED {{ this.date }}</span
          >
          <h3 class="font-bold text-base">
            {{ title }}
          </h3>
          <p class="font-normal text-sm">
            {{ brief }}
          </p>
          <!-- <div class="mb-6 lg:mb-0 lg:relative lg:bottom-0 lg:p-0">
          <contact-button />
        </div> -->
        </div>
      </div>
    </a>
  </div>
</template>