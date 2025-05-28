<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

//pages
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillView from './views/SkillView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactView from './views/ContactView.vue'
import HireMeView from './views/HireMeView.vue'
import Footer from './components/Footer.vue'

import '@/assets/tailwind.css'
</script>

<template>
  <header class="sticky top-0 shadow-md">
    <Navbar />
  </header>

  <!-- <RouterView /> -->

   <main>
    <section id="home" class="">
      <HomeView />
    </section>
    <section id="about" class="">
      <AboutView />
    </section>
    <section id="skills" class="">
      <SkillView />
    </section>
    <section id="hire-me" class="">
      <HireMeView />
    </section>
    <section id="projects" class="">
      <ProjectView />
    </section>
    <section id="contact" class="">
      <ContactView />
    </section>
   </main>

   <!-- <footer class="py-8 px-4 sm:px-6 lg:px-8"> -->
    <footer class="bg-gray-900 rounded-tr-xl rounded-tl-xl text-white mt-6 py-4">
      <Footer />
    </footer>  
   <!-- </footer> -->
</template>