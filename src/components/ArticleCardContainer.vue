<script>
import ArticleCard from './ArticleCard.vue';

export default {
    name: 'Article Card Container',
    components: {
        ArticleCard,
    },
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
            loading: true,
        };
    },
    created() {
        this.getArticles({ page: 0 });
    },
    methods: {
        async displayArticles(articles) {
            // fill data with articles and their metadata.
        },
        async getArticles(variables = {}) {
            this.loading = true;
            try {
                const response = await fetch('https://api.hashnode.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: this.query,
                        variables,
                    }),
                });
                const data = await response.json();
                const articles = data.data.user.publication.posts;
                // console.log(articles[0].slug);
                this.loading = false;
                this.articleData = articles;
                return articles;
            } catch (error) {
                console.error(
                    'There was an error retrieving Hashnode articles for user @danialhasan'
                );
                console.error(error);
            }
        },
    },
};
</script>
<template>
    <div
        class="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-3 xl:max-w-screen-xl md:gap-4 lg:gap-8 md:justify-items-center lg:max-w-screen-lg lg:mx-auto px-4 md:px-0"
    >
        <span
            v-if="loading"
            id="loading_icon"
            class="w-full flex flex-col items-center col-span-3"
        >
            <svg
                class="animate-spin -ml-1 mr-3 mt-24 mb-8 h-16 w-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                ></circle>
                <path
                    class="opacity-75"
                    fill="rgb(0,0,0,1)"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            Loading articles...</span
        >
        <article-card
            v-for="article in articleData"
            :key="article._id"
            v-bind="article"
        />
    </div>
</template>
