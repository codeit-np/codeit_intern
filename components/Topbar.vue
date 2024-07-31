<template>
  <section class="bg-[#db4a28]">
    <v-container class="flex justify-between items-center text-white">
      <div>
        <span>
          {{ websiteStore.website.address }}
        </span>

        <span>
          <span>PAN No</span>
          <span>{{ websiteStore.website.pan_no }}</span>
        </span>
      </div>

      <div>
        <v-btn variant="flat">Student Portal</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
const websiteStore = useWebsiteStore();
</script>

<style lang="scss" scoped></style>
