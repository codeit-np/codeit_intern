<template>
  <NuxtLoadingIndicator/>
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
import { useBlogsStore } from "~/store/blog";
const websiteStore = useWebsiteStore();
const upcomingStore = useUpcomingStore();
const partnerStore = usePartnersStore();
const blogStore = useBlogsStore();


await websiteStore.fetchWebsiteDetails();
await upcomingStore.fetchOnlineUpcomingClasses();
await partnerStore.fetchInternPartners();
await blogStore.fetchBlogs();
</script>

<style lang="scss" scoped></style>
