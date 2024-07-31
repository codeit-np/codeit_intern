<template>
  <div class="w-48">
    <img :src="websiteStore.website.logo" alt="logo" />
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
const websiteStore = useWebsiteStore();
</script>

<style lang="scss" scoped></style>
