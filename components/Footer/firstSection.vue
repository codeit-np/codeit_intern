<template>
  <div class="flex flex-col gap-2">
    <div>
      <img class="w-36" :src="websiteStore.website.logo" alt="logo" />
    </div>
    <div>
      <p>025-575163 , 9862130505</p>
      <p>info@codeit.com.np</p>
      <p>{{ websiteStore.website.address }}</p>
      <p>
        <span class="font-bold">Reg No.</span>{{ websiteStore.website.regno }}
      </p>
      <p>
        <span class="font-bold">PAN No.</span>{{ websiteStore.website.pan_no }}
      </p>
    </div>
    <div>
      <p class="font-bold text-lg">We are on</p>
      <div class="flex flex-row gap-3">
        <a href="https://www.facebook.com/codeit.np" target="_blank" >
          <v-icon class="bg-[#61927A] text-white p-4 rounded-lg"
            >mdi-facebook</v-icon
          >
        </a>
        <a href="https://www.instagram.com/codeit.np" target="_blank" >
          <v-icon class="bg-[#61927A] text-white p-4 rounded-lg"
            >mdi-instagram</v-icon
          >
        </a>
        <a href="https://www.youtube.com/channel/UCWGA2pBJjbuJAVM6vq9hEqw" target="_blank" >
          <v-icon class="bg-[#61927A] text-white p-4 rounded-lg"
            >mdi-youtube</v-icon
          >
        </a>
        <a href="https://www.linkedin.com/company/codeit-np/" target="_blank" >
          <v-icon class="bg-[#61927A] text-white p-4 rounded-lg"
            >mdi-linkedin</v-icon
          >
        </a>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
const websiteStore = useWebsiteStore();
</script>

<style lang="scss" scoped></style>
