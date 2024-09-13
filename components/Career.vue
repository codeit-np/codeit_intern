<template>
  <section class="bg-[#3cc5471a]">
    <v-container>
      <div>
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-3xl text-[#1b1919]">Career</h1>
          <p class="1/2 text-center mx-2">
            Are you a passionate IT professional with a knack for explaining
            complex concepts? Do you have a desire to share your knowledge and
            empower the next generation of tech enthusiasts? Code IT invites
            dynamic and experienced individuals to join our team as instructors.
          </p>
          <div>
            <NuxtLink to="Instructor" >
            <v-btn color="#4F7942" hover="#008000">Apply for an Instructor</v-btn>
          </NuxtLink>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import Instructor from "~/pages/Instructor.vue";
</script>

<style lang="scss" scoped></style>
