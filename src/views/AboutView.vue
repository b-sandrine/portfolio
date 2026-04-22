<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
</script>

<template>
  <div class="container">
    <TitleComponent title="About Me" />
    <div class="grid grid-cols-12 gap-4 p-4">
      <div class="image col-span-12 md:col-span-4">
        <img src="@/assets/images/profile/02.png" class="h-[80%]" alt="My picture">
      </div>
      <div class="about-details col-span-12 md:col-span-7">
        <h3>Software Engineer</h3>
        <p>Hey you 😃 Nice to Meet You<br /> Thanks for checking out my portfolio. I hope you will enjoy your time here
        </p>
        <div class="">
          <h6 class="inline-block mr-4">A little bit about me: </h6>
          <p class="inline ml-4">I am a talented, and proactive software developer with 3+ years of experience creating
            solutions that drive
            customer and client satisfaction. I am proficient in JavaScript, Java, data structures, embedded systems,
            network security, Langchain, Python, MEAN stack, MERN stack and frontend development.
            Most importantly, I am highly committed to and excited to utilize study opportunities to broaden my horizons
            and intellectual curiosity.
          </p>
        </div>
        <div class="">
          <h6 class="inline-block mr-4">My interests: </h6>
          <p class="inline">Love playing volley ball(clearly), reading books, blogging, storytelling, trying foods, and
            travelling</p>
        </div>
        <a href="https://drive.google.com/file/d/1c5WqYl4pvbcvP5AB_1Ol2KVED0WpBQht/view" target="_blank">
          <button class="button">View My Resume</button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-details div {
  margin: 10px auto;
}

/* h5 {
  font-size: 16px;
}
  */

p {
  margin-left: 8px;
}

.button {
  border: 1px solid var(--color-text-secondary-active);
  margin: 10px 0;
  background-color: transparent;
  border-radius: 30px;
  text-align: center;
  padding: 8px 12px;
  font-weight: 600;
  transition: background-color 1s ease-in-out, transform 2s ease-in-out;
  cursor: pointer;
}

.button:hover {
  color: var(--color-white);
  background-color: var(--color-primary);
  border: none;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .about-details {
    margin: 0 auto;
    padding: 0 20px;
  }

  .about-details h3 {
    display: none;
  }

  .image {
    text-align: center;
  }

  p {
    margin: 0;
  }
}
</style>