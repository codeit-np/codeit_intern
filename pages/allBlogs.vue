<template>
    <section class="bg-[#EFF4F1]">
        <div class="flex flex-col justify-center items-center gap-10 py-10">
          <BlogTitle />
          <div class="grid grid-cols-3 gap-5">
            <div
              class="w-[400px] rounded-lg border overflow-hidden shadow-2xl"
              v-for="blogs in blogStore.blogs"
              :key="blogs.id"
            >
              <BlogCard :blogs="blogs"/>
            </div>
          </div>
        </div>
    </section>
  </template>
  
  <script setup>
  import { useBlogsStore } from "~/store/blog";
  const blogStore = useBlogsStore();
  </script>
  
  <style lang="scss" scoped></style>
  