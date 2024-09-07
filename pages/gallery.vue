<template>
  <section>
    <v-container>
      <div class="flex flex-col gap-3">
        <div>
          <NuxtLink to="/">Home</NuxtLink>
          <span> ></span>
          Gallery
        </div>

        <div class="text-2xl items-start flex flex-col gap-3 mt-10">
          <div class="flex justify-start font-bold text-left">
            Photo Gallery <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
          </div>
          <hr class="border-t border-gray-300 w-full border-[1.5px]" />
        </div>
        <div class="grid grid-cols-3 gap-2 items-start">
          <div
            class="border border-[#e4e4e4] rounded-lg overflow-hidden shadow-lg"
            v-for="gallery in galleryStore.gallery"
            :key="gallery.id"
          >
            <img
              class="hover:scale-110 transition-transform duration-500"
              :src="gallery.featured"
              alt="Gallery Images"
            />
            <p class="p-3 text-center">{{ gallery.name }}</p>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useGalleryStore } from "~/store/gallery";
const galleryStore = useGalleryStore();
await galleryStore.fetchGallery();
</script>

<style lang="scss" scoped></style>
