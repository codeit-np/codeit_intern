<template>
  <v-container>
    <section>
      <!-- Title -->
      <div class="flex items-center justify-between">
        <h1 class="font-bold text-3xl mb-6">Popular Courses</h1>
      </div>

      <!-- Course Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          class="text-xs flex flex-col gap-3 hover:shadow-lg relative"
          v-for="popular in popularStore.AllPopularCourses.slice(0, 8)"
          :key="popular.id"
        >
          <NuxtLink :to="`syllabus/${popular.course_slug}`" class="mb-3 relative">
            <img :src="popular.featured" alt="Popular Courses" class="relative" />
            <!-- Rating and Star Icon -->
            <div
              v-if="popular.rating"
              class="absolute top-2 right-2 flex items-center bg-white bg-opacity-75 rounded-full px-2 py-1 text-xs font-bold"
            >
              <v-icon class="text-yellow-500" icon="mdi-star"></v-icon>
              <span>{{ popular.rating }}</span>
            </div>
          </NuxtLink>

          <!-- Course Information -->
          <div class="px-2">
            Duration:
            <span class="font-bold">{{ popular.duration }} | 21</span> Hours
          </div>
          <div class="font-bold px-2">{{ popular.course_name }}</div>
          <div class="px-2">
            <div>Course Fee:</div>
            <div>
              <span class="font-bold">{{ popular.price }}</span>/- Online
              <span class="font-bold">{{ popular.physical_price }}</span>/- Physical
            </div>
          </div>
        </div>
      </div>

      <!-- View All Popular Courses Button -->
      <div class="flex justify-center items-center border border-black p-2 mx-auto mt-4 w-fit">
        <NuxtLink to="/AllPopularCourses" class="px-4 py-2">View All Popular Courses</NuxtLink>
      </div>
    </section>
  </v-container>
</template>

<script setup>
import { usePopularStore } from "~/store/AllPopularCourses";
const popularStore = usePopularStore();
</script>

<style lang="scss" scoped>
</style>
