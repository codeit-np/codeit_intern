<template>
  <section class="bg-[#EFF4F1]">
    <v-container>
      <div class="flex flex-col justify-center items-center gap-10 py-10">
        <BlogTitle />
        <div class="flex flex-row gap-10">
          <div
            class="w-[400px] rounded-lg border overflow-hidden shadow-2xl"
            v-for="(blogs, index) in blogStore.blogs.slice(0, 3)"
            :key="index"
          >
            <BlogCard :blogs="blogs"/>
          </div>
        </div>
        <BlogView />
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useBlogsStore } from "~/store/blog";
const blogStore = useBlogsStore();
</script>

<style lang="scss" scoped></style>
