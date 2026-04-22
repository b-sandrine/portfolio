<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode'

// Dark mode
const { isDark, toggleDarkMode } = useDarkMode()

// Reactive state for toggling the mobile menu
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="container">
    <div class="nav-content">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/logo-removed-bg.png" class="logo-image" alt="Logo" />
      </div>
      <!-- Hamburger Icon (visible on mobile) -->
      <button class="hamburger" @click="toggleMenu" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <!-- Links -->
      <div class="links" :class="{ 'menu-open': isMenuOpen }">
        <a href="#home" class="link">Home</a>
        <a href="#about" class="link hover">About Me</a>
        <a href="#skills" class="link hover">Services</a>
        <a href="#projects" class="link hover">Projects</a>
        <!-- Button for toggling dark mode -->
        
        <button class="dark-mode-toggle" @click="toggleDarkMode" title="Toggle dark mode">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
       
        <button class="contact-button">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  /* h-15 equivalent */
  padding: 2rem 0;
  /* py-8 equivalent */
}

.logo-image {
  height: 5rem;
  /* h-20 equivalent */
}

.links {
  display: flex;
  width: 45%;
  justify-content: space-between;
  align-items: center;
}

.link {
  font-weight: bold;
  font-size: 1rem;
  /* text-base equivalent */
  text-decoration: none;
  color: var(--color-text);
  transition: color 0.2s;
}

:global(.dark) .link {
  color: var(--color-text);
}

.link.hover:hover {
  color: var(--color-primary);
  /* hover:text-[#F97316] */
}

.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--color-text);
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

:global(.dark) .dark-mode-toggle {
  color: var(--color-text);
}

.dark-mode-toggle:hover {
  color: var(--color-primary);
}

.contact-button {
  padding: 0.5rem 1rem;
  /* px-2 py-1 */
  font-size: 0.875rem;
  /* text-[14px] */
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  /* border-1 border-[#F97316] */
  border-radius: 1.875rem;
  /* rounded-[30px] */
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.contact-button:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.contact-button a {
  text-decoration: none;
  color: inherit;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  width: 100%;
  height: 0.25rem;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

:global(.dark) .hamburger span {
  background-color: var(--color-text);
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(0.5rem, 0.5rem);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(0.5rem, -0.5rem);
}

/* Mobile styles */
@media (max-width: 767px) {
  .links {
    width: 100%;
    display: none;
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    background-color: var(--color-bg);
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  :global(.dark) .links {
    background-color: var(--color-bg);
  }

  .links.menu-open {
    display: flex;
  }

  .link,
  .contact-button {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }

  .hamburger {
    display: flex;
  }
}
</style>