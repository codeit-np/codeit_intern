<template>
  <section class="py-20 bg-[#3cc5471a]">
    <v-container>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-3xl text-[#DD4A29]">Internship Partners</h1>
        <p class="w-1/2 text-center">
          Internship partners typically refer to organizations, institutions, or
          companies that collaborate with Code IT to offer internship
          opportunities to students.
        </p>
      </div>
      <div class="flex space-x-10 items-center justify-center mt-6">
        <div v-for="partners in partnerStore.partners" :key="partners.id">
         <a :href="partners.website">
            <img
            :src="partners.image"
            alt="images"
            :href="partners.website"
            class="w-40 h-30 object-cover"
          />
         </a>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { usePartnersStore } from "~/store/internpartners";
const partnerStore = usePartnersStore();
</script>

<style lang="scss" scoped></style>
