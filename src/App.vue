<template>
    <div>
        <!-- <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
      </div>
    </header> -->
        <main
            class="bg-soft-white dark:bg-soft-black-background text-soft-black-background dark:text-soft-white"
        >
            <router-view />
        </main>
    </div>
</template>
