<template>
  <div>
    <div>
      <v-img :src="course.image" :lazy-src="course.image"></v-img>
    </div>
    <div>
      <h1 class="font-bold">{{ course.course_name }}</h1>
      <div>
        Duration: <span class="font-bold">{{ course.duration }}</span> | Date:
        <span class="font-bold">{{ course.date }}</span>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props"> Available Time </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in course.times"
            :key="item.id"
            :value="item.id"
          >
            <v-list-item-title>{{ item.time }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: null,
});
</script>

<style lang="scss" scoped></style>
