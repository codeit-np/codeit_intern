<template>
  <v-container>
    <div>
      <!-- Google Reviews Widget -->
      <div class="sk-ww-google-reviews" data-embed-id="25452833"></div>
    </div>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});
</script>

<style lang="scss" scoped></style>
