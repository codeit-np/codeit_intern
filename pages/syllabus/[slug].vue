<template>
  <div>
    <section class="px-8 md:px-16 lg:px-24 mt-6">
      <div>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to>{{ onlineStore.course.category_name }}</NuxtLink>
        <span>{{ onlineStore.course.course_name }}</span>
      </div>
    </section>

    <section>
        <div>
            
            <img :src="onlineStore.course.featured" alt="image">
        </div>
    </section>

    <div>
        {{ onlineStore.course }}
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
import { useOnlineStore } from "~/store/online";
const onlineStore = useOnlineStore();
await onlineStore.fetchCourseBySlugs(route.params.slug);
</script>

<style lang="scss" scoped>
</style>