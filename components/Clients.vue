<template>
  <section class="py-10">
    <v-container>
      <div class="flex flex-col items-center gap-5">
        <h1 class="font-bold text-4xl">Our Precious Clients</h1>
        <p class="text-center max-w-3xl mb-6">
          We have come a long way to become one of the trusted companies in
          Nepal. Our client portfolio reflects our commitment and dedication to
          serve a variety of businesses with higher professionalism and integrity.
        </p>
      </div>
      <div class="overflow-hidden whitespace-nowrap relative w-full h-40">
        <div class="marquee animate-marquee hover:animate-paused flex items-center h-full">
          <div class="flex space-x-10 items-center">
            <div
              v-for="(client, index) in clientStore.clients"
              :key="index"
              class="flex-shrink-0"
            >
              <a :href="client.link" target="_blank" class="flex items-center">
                <img :src="client.logo" alt="Client Logo" class="w-28 h-28 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>


<script setup>
import { useClientsStore } from "~/store/client";
const clientStore = useClientsStore();
</script>

<style lang="scss" scoped>
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.marquee {
  display: inline-block;
  white-space: nowrap;
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.hover\:animate-paused:hover {
  animation-play-state: paused;
}
</style>
