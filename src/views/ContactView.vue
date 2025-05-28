<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
</script>

<template>
  <div class="container">
    <TitleComponent title="Get In Touch" />
    <div class="flex bg-[#F9FAFF] rounded-3xl shadow-xsm contact-container p-16">
      <div class="contact-description py-8">
        <h3>Have an Awesome Idea?</h3>
        <p class="mt-4 text-lg md:text-xl opacity-90">I'm excited to connect! Reach out for collaborations, inquiries,
          or just to say hi.</p>
      </div>
      <div class="form w-[80%]">
        <div class="mr-0 px-4 sm:px-6 lg:px-8 float-right ">
          <div
            class=" max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Send Me a Message</h2>
            <div >
              <div class="mb-4">
                <label for="name" class="block text-base font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] transition duration-200"
                  placeholder="Your Name" required>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-base font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] transition duration-200"
                  placeholder="your.email@example.com" required>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-base font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4"
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#F97316] focus:border-[#F97316] transition duration-200"
                  placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit"
                class="w-full bg-[#F97316] text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 transition duration-200">Send
                Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    padding: 20px;
  }

  .contact-description {
    text-align: center;
    margin-bottom: 20px;
  }

  .form {
    width: 100%;
  }
}

</style>