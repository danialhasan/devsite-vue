<script>
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "Article Card Container",
  data() {
    return {
      // this will be filled with article info from the hashnode api.
      // alter ArticleCard.vue props to have the same article properties.
      articleData: [],
      // graphQL query to get data from hashnode
      query: `
        {
         user(username:"danialhasan") {
            publication {
              posts(page:0) {
              title
        brief
        slug
        cuid
				dateAdded
        coverImage
				_id
        }}}}`,
    };
  },
  components: {
    ArticleCard,
  },
  methods: {
    async displayArticles(articles) {
      // fill data with articles and their metadata.
    },
    async getArticles(variables = {}) {
      try {
        const response = await fetch("https://api.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: this.query,
            variables,
          }),
        });
        const data = await response.json();
        const articles = data.data.user.publication.posts;
        // console.log(articles[0].slug);
        this.articleData = articles;
        return articles;
      } catch (error) {
        console.error(
          "There was an error retrieving Hashnode articles for user @danialhasan"
        );
        console.error(error);
      }
    },
  },
  created() {
    this.getArticles({ page: 0 });
  },
};
</script>
<template>
  <div
    class="
      w-full
      h-full
      lg:flex lg:flex-row
      lg:justify-evenly
      lg:h-auto
      max-w-screen-lg
      lg:flex-wrap
      mx-auto
      mb-24
      px-4
    "
  >
    <article-card
      v-for="article in this.articleData"
      :key="article._id"
      v-bind="article"
    />
  </div>
</template>