<template>
  <div>
    <header>
      <Topbar />
      <Nav />
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
import { useUpcomingStore } from "~/store/upcoming";
const websiteStore = useWebsiteStore();
const upcomingStore = useUpcomingStore();

await websiteStore.fetchWebsiteDetails();
await upcomingStore.fetchOnlineUpcomingClasses();
</script>

<style lang="scss" scoped></style>
