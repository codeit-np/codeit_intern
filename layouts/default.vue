<template>
  <div>
  <NuxtLoadingIndicator/>
    <header>
      <Topbar />
      <Nav />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
import { useUpcomingStore } from "~/store/upcoming";
import { usePartnersStore } from "~/store/internpartners";
import { useBlogsStore } from "~/store/blog";
import { useClientsStore } from "~/store/client";

const websiteStore = useWebsiteStore();
const upcomingStore = useUpcomingStore();
const partnerStore = usePartnersStore();
const blogStore = useBlogsStore();
const clientStore = useClientsStore();

await websiteStore.fetchWebsiteDetails();
await upcomingStore.fetchOnlineUpcomingClasses();
await partnerStore.fetchInternPartners();
await blogStore.fetchBlogs();
await clientStore.fetchOurClients();
</script>

<style lang="scss" scoped></style>
