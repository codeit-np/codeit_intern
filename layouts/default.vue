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
import { usePartnersStore } from "~/store/internpartners";
const websiteStore = useWebsiteStore();
const upcomingStore = useUpcomingStore();
const partnerStore = usePartnersStore();



await websiteStore.fetchWebsiteDetails();
await upcomingStore.fetchOnlineUpcomingClasses();
await partnerStore.fetchInternPartners();
</script>

<style lang="scss" scoped></style>
