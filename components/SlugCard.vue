<template>
  <div class="flex flex-col gap-8">
    <!-- Curse Image  -->
    <div>
      <img :src="onlineStore.course.featured" alt="course image" />
    </div>

    <!-- Introductory Part  -->
    <div>
      <h1 class="font-bold text-2xl">{{ onlineStore.course.course_name }} Training in Nepal</h1>
      <hr class="border-t border-gray-300 w-full" />
      <div class="flex justify-between">
        <div>
          <span class="font-bold">Duration:</span>
          {{onlineStore.course.duration}}
        </div>
        <div>
          <span class="font-bold">Course Fee:</span>
          {{ onlineStore.course.price }}/-
          <span class="line-through text-red-500">{{ onlineStore.course.cost_price }}</span>
        </div>
      </div>
    </div>

    <!-- Social Links  -->
    <div class="flex justify-center gap-2">
      <div class="flex flex-col text-center text-slate-700">
        <p>673</p>
        <p class="text-[10px]">Shares</p>
      </div>
      <div class="flex gap-2">
        <button
          class="flex gap-3 border rounded-lg px-5 py-1 items-center text-white bg-[#1877f2] text-sm"
        >
          <v-icon>mdi-facebook</v-icon>Share
        </button>
        <button
          class="flex gap-3 border rounded-lg px-5 py-1 items-center text-white bg-[#25d366] text-sm"
        >
          <v-icon>mdi-whatsapp</v-icon>Share
        </button>
      </div>
    </div>

    <!-- Course Description  -->
    <div class="flex flex-col gap-4" >
      <div v-html="onlineStore.course.description"></div>
      <div  >
        <h2 class="text-xl font-semibold mt-4" >What you will learn</h2>
        <ul class="list-none pl-0 text-base">
          <li v-for="(item, index) in whatYouWillLearn" :key="index" class="relative pl-8 mb-4 flex items-center">
            <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 border-2 border-gray-800 rounded-full flex items-center justify-center text-gray-800 text-lg">
              ✔
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mt-4">Materials Included</h2>
        <ul class="list-none pl-0 text-base">
          <li v-for="(item, index) in materialsIncluded" :key="index" class="relative pl-8 mb-4 flex items-center">
            <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 border-2 border-gray-800 rounded-md flex items-center justify-center text-gray-800 text-lg">
              ✔
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
      <div  >
        <h2 class="text-xl font-semibold mt-4" >What you will learn</h2>
        <ul class="list-none pl-0 text-base">
          <li v-for="(item, index) in requirements" :key="index" class="relative pl-8 mb-4 flex items-center">
            <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 border-2 border-gray-800 rounded-full flex items-center justify-center text-gray-800 text-lg">
              ✔
            </span>
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Course Syllabus Section -->
      <div>
        <h2 class="text-xl font-semibold mt-4">Course Syllabus</h2>
        <div v-for="(build, index) in onlineStore.course.course_builds" :key="index" class="mb-4">
          <details class="border rounded-md">
            <summary class="cursor-pointer px-4 py-2 bg-gray-100 font-semibold">
              {{ build.topic }}
            </summary>
            <ul class="pl-6 pr-4 py-2 text-base list-disc">
              <li v-for="(lesson, lessonIndex) in build.course_lessons" :key="lessonIndex">
                {{ lesson.lesson }}
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// defineProps({
//   card: null,
// });
const route = useRoute();
import { useOnlineStore } from "~/store/online";
const onlineStore = useOnlineStore();
await onlineStore.fetchCourseBySlugs(route.params.slug);

const whatYouWillLearn = computed(() => {
  return onlineStore.course.what_you_will_learn
    ? onlineStore.course.what_you_will_learn.split(',').map(item => item.trim())
    : [];
});

const materialsIncluded = computed(() => {
  return onlineStore.course.material_included
    ? onlineStore.course.material_included.split(',').map(item => item.trim())
    : [];
});

const requirements = computed(() => {
  return onlineStore.course.requirements
    ? onlineStore.course.requirements.split(',').map(item => item.trim())
    : [];
});
</script>

<style lang="scss" scoped>
</style>