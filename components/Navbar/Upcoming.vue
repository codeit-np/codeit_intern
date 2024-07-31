<template>
  <div class="relative">
    <NuxtLink to="/upcoming">
      <strong>Upcoming</strong>
      <div
        class="w-4 h-4 bg-red-500 text-white flex justify-center items-center absolute -top-4 right-0"
      >
        {{ upcomingStore.upcoming.length }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useUpcomingStore } from "~/store/upcoming";
const upcomingStore = useUpcomingStore();
</script>

<style lang="scss" scoped></style>
