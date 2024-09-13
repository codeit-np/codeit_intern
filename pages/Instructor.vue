<template>
  <section>
    <section
      class="relative flex items-center justify-start bg-cover bg-center w-full h-[60vh] object-cover"
      style="background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprogramming&psig=AOvVaw17bs0s7B8dwUyOvHEDMBlE&ust=1725956330815000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCAv8G2tYgDFQAAAAAdAAAAABAE')"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-left text-white ml-8 md:ml-16 lg:ml-24">
        <h1 class="text-4xl md:text-4xl font-bold">Upcoming Classes</h1>
        <p
          class="mt-4 text-lg md:text-lg"
        >At Code IT, we understand that financial barriers should never hinder your educational journey.</p>
      </div>
    </section>
    
    <div class="container" >
      <div class="flex items-center px-16 sm:px-16 lg:px-32 xl:px-48 mt-8">
        <a href="pages/index.vue" class="mr-2">Home ></a>
        <p>Apply for Instructor</p>
      </div>

      <div class="px-16 sm:px-16 lg:px-32 xl:px-48 mt-12 flex gap-4">
        <div class="w-1/3 bg-gray-200 p-4">
          <!-- Adjusted width -->
          <h1 class="text-2xl font-semibold mb-4">
            Unlock Your Teaching Potential: Join Code IT as an Instructor!
          </h1>
          <p class="mb-4 text-base font-normal">
            Are you a passionate IT professional with a knack for explaining
            complex concepts? Do you have a desire to share your knowledge and
            empower the next generation of tech enthusiasts? Code IT invites
            dynamic and experienced individuals to join our team as instructors.
          </p>
          <h2 class="text-xl font-bold mb-2">
            Why Become a Code IT Instructor?
          </h2>
          <ul class="mb-4">
            <li class="mb-2 text-base font-normal">
              <strong>Shape Future Tech Leaders:</strong> Inspire and mentor
              aspiring IT professionals, helping them build the skills they need
              to excel in the industry.
            </li>
            <li class="mb-2 text-base font-normal">
              <strong>Flexible Teaching Opportunities:</strong> Enjoy the
              flexibility of part-time or full-time teaching positions, tailored
              to your schedule and preferences.
            </li>
            <li class="text-base font-normal">
              <strong>Cutting-Edge Curriculum:</strong> Work with our expert
              team to develop and deliver curriculum that reflects the latest
              industry trends and technologies.
            </li>
          </ul>
          <p class="text-base font-normal">
            Join us on this exciting journey of knowledge sharing and skill
            development. Together, let's Code IT!
          </p>
        </div>

        <div class="w-full py-8">
          <!-- Adjusted width -->
          <div class="bg-white rounded-lg p-6">
            <h1 class="text-4xl font-bold mb-6 flex items-center">
              Apply for Instructor
              <v-icon class="text-4xl ml-2">mdi-human-male-board</v-icon>
            </h1>

            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label for="full-name" class="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Full Name"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    for="whatsapp-number"
                    class="block text-sm font-medium mb-2"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    id="whatsapp-number"
                    type="tel"
                    placeholder="WhatsApp Number"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label
                    for="alternate-number"
                    class="block text-sm font-medium mb-2"
                  >
                    Alternate Number (optional)
                  </label>
                  <input
                    id="alternate-number"
                    type="tel"
                    placeholder="Alternate Number"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label for="expertise" class="block text-sm font-medium mb-2">
                    Your Expertise *
                  </label>
                  <input
                    id="expertise"
                    type="text"
                    placeholder="Your Expertise"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label for="portfolio" class="block text-sm font-medium mb-2">
                    Portfolio (github or website link)
                  </label>
                  <input
                    id="portfolio"
                    type="url"
                    placeholder="Portfolio Link"
                    class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>
              </div>

              <div class="mb-6">
                <label for="cv" class="block text-sm font-medium mb-2">
                  Please Upload Your CV*
                </label>
                <input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div class="mb-6">
                <label
                  for="teaching-demo"
                  class="block text-sm font-medium mb-2"
                >
                  5 minutes teaching demo video link (youtube url or google
                  drive link) *
                </label>
                <input
                  id="teaching-demo"
                  type="url"
                  placeholder="YouTube or Google Drive URL"
                  class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div class="mb-6">
                <label
                  for="about-yourself"
                  class="block text-sm font-medium mb-2"
                >
                  About yourself *
                </label>
                <input
                  id="about-yourself"
                  type="text"
                  placeholder="About Yourself"
                  class="w-full border border-gray-500 rounded-md px-3 py-2 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              <div
                class="bg-white p-6 rounded-lg shadow-lg w-80 flex items-center justify-between"
              >
                <form class="flex items-center w-full">
                  <div class="flex items-center w-full">
                    <input
                      id="notRobert"
                      type="checkbox"
                      class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label for="notRobert" class="ml-2 text-gray-700"
                      >I am not robot</label
                    >
                  </div> 
                </form>
                <div>
                  <img
                    src="assets/images/logo.png"
                    alt="Logo"
                    class="ml-4 w-11 h-11"
                  />
                  <div class="mt-4 flex space-x-4 text-gray-600 text-sm">
                  <a href="https://policies.google.com/privacy?hl=en" target="_blank" class="text-xs">Privacy</a>
                  <a href="https://policies.google.com/terms?hl=en" target="_blank" class="text-xs">Terms</a>
                </div>
              </div>

                </div>
              <button
                type="submit"
                class="bg-green-800 text-white font-bold py-2 px-4 rounded-md hover:bg-green-900 my-2 mx-2"
              >
                Submit
                <v-icon >mdi-arrow-right</v-icon>
              </button>
              <p>
    By applying for instructor, I agree to the Code IT's<a href="https://codeit.com.np/instructorterms" target="_blank" class="font-bold">Terms and Conditions</a>.
</p>

            </form>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
