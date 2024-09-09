<template>
  <section>
    <v-container>
      <div class="flex items-center justify-between">
        <h1 class="font-bold text-3xl mb-6">Popular Courses</h1>
        <!-- Search Bar -->
        <div class="relative flex items-center w-full md:w-1/2 lg:w-1/3 mb-6">
          <input
            type="text"
            v-model="searchQuery"
            @input="filterCourses"
            @focus="showSuggestions = true"
            @blur="hideSuggestions"
            placeholder="Search Courses"
            class="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <!-- Vuetify Search Button Icon -->
          <div
            icon
            @click="executeSearch"
            class=" text-black absolute end-2"
          >
            <v-icon>mdi-magnify</v-icon>
          </div>
          <div
            v-if="showSuggestions && filteredCourses.length > 0"
            class="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <ul>
              <li
                v-for="(course, index) in filteredCourses"
                :key="index"
                @mousedown.prevent="selectCourse(course)"
                class="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                {{ course.course_name }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Course Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="popular in displayedCourses"
          :key="popular.id"
          class="text-xs flex flex-col gap-3 hover:shadow-lg relative"
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
          <div class="px-2">
            Duration:
            <span class="font-bold">{{ popular.duration }} | 21</span>
            Hours
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
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { usePopularStore } from '~/store/AllPopularCourses';

const popularStore = usePopularStore();
const searchQuery = ref('');
const showSuggestions = ref(false);
const filteredCourses = ref([]);
const displayedCourses = ref(popularStore.AllPopularCourses);

// Method to filter courses based on the search query
const filterCourses = () => {
  filteredCourses.value = popularStore.AllPopularCourses.filter((course) =>
    course.course_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  // If a course matches, display it at the top
  if (filteredCourses.value.length > 0) {
    displayedCourses.value = [
      filteredCourses.value[0],
      ...popularStore.AllPopularCourses.filter(
        (course) => course.id !== filteredCourses.value[0].id
      ),
    ];
  }
};

// Method to select a course from the suggestions
const selectCourse = (course) => {
  searchQuery.value = course.course_name;
  displayedCourses.value = [
    course,
    ...popularStore.AllPopularCourses.filter(
      (c) => c.id !== course.id
    ),
  ];
  showSuggestions.value = false;
};

// Hide suggestions when clicking outside
const hideSuggestions = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 200);
};

// Method to execute the search when the search button is clicked
const executeSearch = () => {
  filterCourses();
  showSuggestions.value = false;
};
</script>

<style lang="scss" scoped></style>
