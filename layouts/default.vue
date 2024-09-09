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
import { useOnlineStore } from "~/store/online";
import { usePhysicalStore } from "~/store/physical";
import { usePopularStore } from "~/store/AllPopularCourses";

const websiteStore = useWebsiteStore();
const upcomingStore = useUpcomingStore();
const OnlineStore = useOnlineStore();
const PhysicalStore = usePhysicalStore();
const popularStore = usePopularStore();

await websiteStore.fetchWebsiteDetails();
await upcomingStore.fetchOnlineUpcomingClasses();
await OnlineStore.fetchOnlineCourses();
await PhysicalStore.fetchPhysicalCourses();
await popularStore.fetchPopularCourses();
</script>

<style lang="scss" scoped></style>
