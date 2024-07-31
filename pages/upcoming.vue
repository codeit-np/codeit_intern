<template>
  <div>
    <h1>Upcoming Classes</h1>
    <section>
      <v-container>
        <v-row>
          <v-col v-for="course in upcomingStore.upcoming" :key="course.id">
            <UpcomingCourse :course="course" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useUpcomingStore } from "~/store/upcoming";
const upcomingStore = useUpcomingStore();
</script>

<style lang="scss" scoped></style>
