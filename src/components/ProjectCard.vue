<script>
export default {
    props: {
        image: {
            type: String,
            default: './assets/404image.jpg', //test this
        },
        title: {
            type: String,
            default: 'No Title Given',
        },
        description: {
            type: String,
            default: 'No description Given',
        },
        caseStudy: {
            type: String,
            default: '/404',
        },
        githubLink: {
            type: String,
            default: '/404',
        },
        link: {
            type: String,
            default: '',
        },
        rewriting: {
            type: Boolean,
            default: false,
        },
        building: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            tooltipHovered: false,
        };
    },
    methods: {
        viewProject(link) {
            window.open(link, '_blank');
        },
        goToCaseStudy(caseStudy) {
            window.open(caseStudy, '_blank');
        },
    },
};
</script>
<template>
    <div
        class="border-2 border-soft-black-background dark:border-soft-white flex flex-col lg:h-full"
    >
        <div
            class="w-full h-1/2 lg:h-auto lg:flex-grow hover:cursor-pointer"
            @click="viewProject(link)"
        >
            <img
                class="w-full h-full"
                :src="image"
                alt="Project card image"
                srcset=""
                draggable="false"
            />
        </div>
        <div
            class="w-full h-1/2 py-4 px-6 bg-white dark:bg-soft-black-foreground lg:h-auto"
        >
            <p class="text-2xl font-bold flex items-center">
                {{ title }}
                <span
                    v-if="rewriting"
                    class="ml-2 py-[2px] px-2 text-sm rounded-lg bg-yellow-400 text-gray-700 font-normal"
                    >REWRITING</span
                >
                <span
                    v-if="building"
                    class="ml-2 py-[2px] px-2 text-sm rounded-lg bg-blue-700 text-gray-50 font-normal"
                    >BUILDING</span
                >
            </p>
            <p class="text-md py-2">{{ description }}</p>
            <div class="flex flex-row w-full h-auto pt-4 pb-2">
                <button
                    class="uppercase bg-soft-black-foreground text-soft-white dark:bg-soft-white dark:text-soft-black-background px-6 py-2 rounded-lg"
                    @click="goToCaseStudy(caseStudy)"
                >
                    More Info
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </button>
                <a target="_blank" :href="githubLink">
                    <button
                        class="uppercase text-soft-black-foreground border-2 border-soft-black-background dark:text-soft-white dark:border-soft-white px-6 py-2 rounded-lg ml-6"
                    >
                        Github
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>
