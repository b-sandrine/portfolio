<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'
import Navbar from '@/components/Navbar.vue'

//pages
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillView from './views/SkillView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactView from './views/ContactView.vue'
import HireMeView from './views/HireMeView.vue'
import Footer from './components/Footer.vue'

import FooterEnhanced from './components/Footer-Enhanced.vue'
import HireMeViewEnhanced from './views/HireMeView-Enhanced.vue'
import ProjectViewEnhanced from './views/ProjectView-Enhanced.vue'
import SkillViewEnhanced from './views/SkillView-Enhanced.vue'


import '@/assets/tailwind.css'

// Initialize dark mode
useDarkMode()
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
      <SkillViewEnhanced />
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
      <FooterEnhanced />
    </footer>  
   <!-- </footer> -->
</template>