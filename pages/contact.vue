<template>
  <section>
    <v-container>
      <div class="flex flex-col gap-3">
        <div>
          <NuxtLink to="/">Home</NuxtLink>
          <span> ></span>
          Contact Us
        </div>

        <h1 class="text-3xl font-bold">Contact Us</h1>
        <p>
          If you have any queries, please do not hesitate to contact us. <br />
          Email: {{ websiteStore.website.email }}
        </p>
      </div>
      <div class="flex flex-row justify-between mt-10 gap-10">
        <div
          class="flex flex-col gap-8 border border-[#cecece] py-12 px-6 rounded-lg w-full"
        >
          <h1 class="text-3xl font-bold underline">Contact Us</h1>
          <div class="flex flex-row gap-7 items-center justify-start">
            <v-icon class="bg-[#DC4C2C] text-white p-4 rounded-lg"
              >mdi-phone</v-icon
            >
            <div>
              <p class="font-bold">Call Us:</p>
              <p>
                {{ websiteStore.website.contact }},
                {{ websiteStore.website.whatsapp }}
              </p>
            </div>
          </div>
          <div class="flex flex-row gap-7 items-center justify-start">
            <v-icon class="bg-[#DC4C2C] text-white p-4 rounded-lg"
              >mdi-email-open-outline</v-icon
            >
            <div>
              <p class="font-bold">Email:</p>
              <p>{{ websiteStore.website.email }}</p>
            </div>
          </div>
          <div class="flex flex-row gap-7 items-center justify-start">
            <v-icon class="bg-[#DC4C2C] text-white p-4 rounded-lg"
              >mdi-map-marker</v-icon
            >
            <div>
              <p class="font-bold">Address:</p>
              <p>{{ websiteStore.website.address }}</p>
            </div>
          </div>
          <div class="flex flex-row gap-7 items-center justify-start">
            <v-icon class="bg-[#DC4C2C] text-white p-4 rounded-lg"
              >mdi-briefcase-clock</v-icon
            >
            <div>
              <p class="font-bold">Working Hours:</p>
              <p>{{ websiteStore.website.working_hr }}</p>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.662121468005!2d87.28372377522096!3d26.818885076703214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4175e4f26a95%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1725721901034!5m2!1sen!2snp"
            width="600"
            height="450"
            style="border: 0px solid #000; border-radius: 8px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useWebsiteStore } from "~/store/website";
const websiteStore = useWebsiteStore();
</script>

<style lang="scss" scoped></style>
