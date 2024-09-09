<template>
    <div class="flex flex-col items-center gap-6">
    <!-- Our Course Status writing part -->
    <div class="flex flex-col items-center justify-center gap-3">
      <v-icon icon="mdi-mouse"></v-icon>
      <h1 class="font-bold text-3xl">Our Course Status</h1>
      <h2 class="w-[600px] text-center">Check out the current state of our classes. Select your course, give us your time, and we'll work with you to fit you into the appropriate timetable.</h2>
    </div>


    <!-- Our Course Status NuxtLink part -->
    <div class="flex items-center justify-center gap-6 text-white">
      <div class="border rounded-md bg-[#5C9F77] flex items-center justify-center flex-col py-3 px-5 w-auto h-auto">
        <img  class="w-[80px] " src="~assets/images/image1.png" alt="image">
        <h5>5</h5>
        <NuxtLink to="OnlineUpcomingCard">Online Upcoming Classes <v-icon icon="mdi-arrow-right"></v-icon></NuxtLink>
      </div>

      <div class="border rounded-md bg-[#ED6702] flex items-center justify-center flex-col py-3 px-5 w-auto h-auto">
        <img  class="w-[80px] " src="~assets/images/image2.png" alt="image">
        <h5>5</h5>
        <NuxtLink to="PhysicalUpcomingCard">Physical Upcoming Classes <v-icon icon="mdi-arrow-right"></v-icon></NuxtLink>
      </div>
      
      <div class="border rounded-md bg-[#F0CB3E] flex items-center justify-center flex-col py-3 px-5 w-auto h-auto">
        <img  class="w-[80px] " src="~assets/images/image3.png" alt="image">
        <h5>5</h5>
        <NuxtLink to="AllPopularCourses">View All Courses <v-icon icon="mdi-arrow-right"></v-icon></NuxtLink>
      </div>s
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>