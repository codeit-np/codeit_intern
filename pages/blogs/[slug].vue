<template>
  <section>
    <v-container>
      <div class="flex flex-col gap-5">
        <h1 class="text-3xl font-semibold">{{ blogStore.blog.title }}</h1>
        <div class="py-2 text-normal flex gap-2 bg-white">
          <v-icon>mdi-calendar</v-icon>
          <p>{{ blogStore.blog.created_at }}</p>
        </div>
        <img
          class="w-[800px]"
          :src="blogStore.blog.featured"
          :alt="blogStore.blog.featured"
        />
        <p v-html="blogStore.blog.description"></p>
        <div class="flex flex-row gap-3 justify-center">
          <div class="hover:translate-y-[-3px] hover:shadow-lg transition-transform duration-300" >
            <v-btn
              style="background-color: #1877f2; color: white"
              prepend-icon="mdi-facebook"
            >
              Share
            </v-btn>
          </div>
          <div class="hover:rotate-[720deg] transition-transform duration-1000" >
            <v-btn
              style="background-color: #25d366; color: white"
              prepend-icon="mdi-whatsapp"
            >
              Share
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const route = useRoute();
import { useBlogsStore } from "~/store/blog";
const blogStore = useBlogsStore();
await blogStore.fetchBlogsBySlugs(route.params.slug);
</script>

<style lang="scss" scoped></style>
