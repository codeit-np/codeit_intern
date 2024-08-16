<template>
  <div>
    <img class="w-[500px] h-[250px]" :src="blogs.featured" alt="Blog Image" />
    <div class="p-4 flex flex-col gap-2">
      <h1 class="text-2xl">
        {{ truncateText(blogs.title, 3) }}
      </h1>
      <p
        v-html="truncateText(blogs.description, 23)"
        class="text-sm text-[#6c6c6c]"
      ></p>
      <NuxtLink :to="`blogs/${blogs.slug}`">Read More</NuxtLink>
    </div>
    <div class=" mt-8"  >
      <hr class="border-t border-gray-300 w-full" />
      <div class="px-4 py-2 text-xs flex gap-2 bg-white">
        <v-icon>mdi-calendar</v-icon>
        <p>{{ blogs.created_at }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blogs: null,
});

function truncateText(text, wordLimit) {
  // Remove <strong> tags and replace line breaks with spaces
  const cleanedText = text
    .replace(/<strong>(.*?)<\/strong>/g, "$1") // Remove <strong> tags
    .replace(/<br\s*\/?>/g, " ") // Replace <br> tags with spaces
    .replace(/<p\s*.*?>/g, " ") // Replace <p> tags with spaces
    .replace(/<\/p>/g, " "); // Replace closing </p> tags with spaces

  const words = cleanedText.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return cleanedText;
}
</script>

<style scoped></style>
