<script>
export default {
    emits: ['clicked'],
};
</script>

<template>
    <button
        @click="$emit('clicked')"
        class="mx-auto w-44 h-16 lg:my-0 lg:mx-2 text-center bg-gradient-to-r from-accent-2 to-accent-1 text-2xl text-soft-white rounded-xl transition-all hover:-mt-1"
    >
        Contact Me
    </button>
</template>
