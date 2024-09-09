<template>
  <div>
    <!-- Background Section -->
    <section
      class="relative flex items-center justify-start bg-cover bg-center w-full h-[60vh] object-cover"
      style="background-image: url('https://res-console.cloudinary.com/dtaiz4ssg/media_explorer_thumbnails/c71d1b9d8e39272eee50028fd22bb847/detailed')"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-left text-white ml-8 md:ml-16 lg:ml-24">
        <h1 class="text-4xl md:text-4xl font-bold">Upcoming Classes</h1>
        <p class="mt-4 text-lg md:text-lg">At Code IT, we understand that financial barriers should never hinder your educational journey.</p>
      </div>
    </section>

    <section class="px-8 md:px-16 lg:px-24 mt-6">
      <div>
        <NuxtLink to="/"> Home</NuxtLink> >
        <span>Upcomings</span>
      </div>
    </section>

    <!-- Physical Class Details -->
    <section class="px-8 md:px-16 lg:px-24 mt-10">
      <div>
        <h2 class="font-bold text-2xl">Physical Class</h2>
      </div>
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="physical in PhysicalStore.physical"
          :key="physical.id"
          class="hover:shadow-xl border-black rounded-2xl relative"
        >
          <NuxtLink :to="`syllabus/${physical.course_slug}`">
            <div class="relative">
              <img :src="physical.image" alt="physical.image" class="w-full h-auto rounded-t-2xl" />
              <!-- Date and Icon at Top-Left -->
              <div class="absolute top-0 left-0 p-2 text-black rounded-br-2xl flex items-center">
                <v-icon icon="mdi-calendar" class="text-red-600"></v-icon>
                <p class="ml-1 text-sm font-bold">{{ physical.date }}</p>
              </div>
              <!-- Time at Bottom-Left -->
              <div class="absolute bottom-0 left-0 p-2 bg-[#f2f6f6] rounded-tr-2xl text-black">
                <p class="font-bold">{{ physical.class_groups[0].time }}</p>
              </div>
              <!-- Duration at Bottom-Right -->
              <div class="absolute bottom-0 right-0 p-2 bg-[#4b4141] text-white rounded-tl-2xl">
                <p class="font-bold">{{ physical.duration }}</p>
              </div>
            </div>
          </NuxtLink>
          <div class="p-4">
            <p>
              {{ physical.physical_price }} /-
              <span class="line-through text-red-500">{{ physical.cost_price }}</span>
            </p>
            <p class="font-semibold text-lg">{{ physical.course_name }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePhysicalStore } from "~/store/physical";
const PhysicalStore = usePhysicalStore();
</script>

<style lang="scss" scoped>
</style>