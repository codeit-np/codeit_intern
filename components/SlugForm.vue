<template>
    <div>
       <div class="bg-green-50 px-2 sticky">
        <h1 class="text-2xl font-semibold"> Quick Enquiry</h1>
        <p>Course</p>
        <input type="text" class="border-black bg-white w-full h-9 rounded-md">
        <p class="my-4">please select course type*</p>
        <input type="checkbox"> Physical 
        <input type="checkbox"> Online
        <p class="my-4"> Full Name <span class="text-red-500">*</span></p> 
        <input type="text" class="border-black bg-white w-full h-9 rounded-md">
        <p class="my-4">Address <span class="text-red-500">*</span></p> 
        <input type="text" class="border-black bg-white w-full h-9 rounded-md">
        <p class="my-4">Mobile <span class="text-red-500">*</span></p> 
        <input type="text" class="border-black bg-white w-full h-9 rounded-md">
        <p class="my-4">Message <span class="text-red-500">*</span></p> 
        <input type="text" placeholder="I want to learn Python. Please tell me more about this course." class="border-black bg-white flex-grow w-full rounded-md h-12 px-2" >

        <div class="bg-white">
          <input type="checkbox" > I'am not a robot
        </div>
       </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>