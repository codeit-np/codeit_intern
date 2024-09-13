<template>
  <v-container>
    <section class="px-8 md:px-16 lg:px-24 mt-6">
      <div>
        <NuxtLink to="/">Home</NuxtLink> >
        <NuxtLink to>{{ onlineStore.course.category_name }}</NuxtLink> >
        <span>{{ onlineStore.course.course_name }}</span>
      </div>
    </section>
    <!-- For Slug Card and Slug Form -->
    <section>
      <div class="grid grid-cols-2 gap-10" >
        <!-- Slug Card  -->
        <div>
          <SlugCard :card="card"/>
        </div>
        <!-- Slug Form  -->
        <div>
          <SlugForm />
        </div>
      </div>
    </section>
    <!-- For Similar Courses Section -->
    <section>

    </section>
  </v-container>
</template>

<script setup>
const route = useRoute();
import { useOnlineStore } from "~/store/online";
const onlineStore = useOnlineStore();
await onlineStore.fetchCourseBySlugs(route.params.slug);
</script>

<style lang="scss" scoped>
</style>