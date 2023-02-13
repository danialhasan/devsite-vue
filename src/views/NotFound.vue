<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'NotFound',
    data() {
        return {};
    },
    props: [],
    methods: {
        buttonHovered() {
            const button = document.querySelector('button');
            let styles = [
                'bg-black',
                'text-white',
                'bg-white',
                'text-black',
                'border',
                'border-black',
            ];
            styles.map((style) => button.classList.toggle(style));
        },
    },
    components: { Navbar },
};
</script>
<template>
    <header
        class="h-screen text-soft-black-background dark:text-soft-white shadow w-full"
    >
        <navbar />
        <div
            class="flex flex-col justify-center mt-36 text-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
        >
            <div class="text-gray-900 dark:text-soft-white">
                <h1 class="text-3xl font-bold leading-tight">Page Not Found</h1>
                <h4 class="font-normal py-6">
                    Are you lost? Press the button to go home.
                </h4>
                <router-link :to="{ name: 'Home' }">
                    <button
                        class="px-4 py-2 bg-black text-white rounded-lg"
                        @mouseenter="buttonHovered"
                        @mouseleave="buttonHovered"
                    >
                        Go Home
                    </button>
                </router-link>
            </div>
        </div>
    </header>
</template>
