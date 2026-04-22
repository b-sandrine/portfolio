<template>
  <div class="home-container">
    <!-- Animated background SVG elements -->
    <div class="svg-container">
      <svg class="svg-shape shape-1" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg class="svg-shape shape-2" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="10" />
      </svg>
      <svg class="svg-shape shape-3" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" />
      </svg>
    </div>

    <div class="container flex h-[100%] gap-12">
      <!-- Left side: Text content -->
      <div class="details h-auto fade-in-left">
        <div class="greeting-wrapper">
          <h5 class="greeting-text">Hi, I am</h5>
          <h3 class="name-text">Sandrine DUSHIMIMANA</h3>
        </div>

        <h6 class="role-text">
          <span>I am a </span>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
        </h6>

        <p class="description-text">I am committed to playing a pivotal role in driving the technological
          transformations in Africa. Most importantly, I am highly committed to and excited to utilize study
          opportunities to broaden my horizons and intellectual curiosity.</p>

        <div class="social-links fade-in-up">
          <a href="https://www.instagram.com/d_bs02/" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/b-sandrine" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dushimimana-sandrine-219b891b9/" target="_blank"
            rel="noopener noreferrer" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:sanrdushimimana@gmail.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://x.com/sanrdushimimana" target="_blank" rel="noopener noreferrer" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://dsandrineteachestech.blogspot.com/" target="_blank" title="Checkout my blog"
            rel="noopener noreferrer" class="social-link">
            <i class="fas fa-pen"></i>
          </a>
        </div>

        <div class="action-buttons fade-in-up">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-secondary">Get In Touch</a>
        </div>
      </div>

      <!-- Right side: Profile image and decorative elements -->
      <div class="image-section fade-in-right">
        <div class="profile-image-wrapper">
          <div class="profile-frame">
            <img src="@/assets/images/profile/profile.JPG" alt="Sandrine DUSHIMIMANA" class="profile-image" />
          </div>
          <div class="floating-element element-1"></div>
          <div class="floating-element element-2"></div>
          <div class="floating-element element-3"></div>
        </div>

        <!-- Decorative cards -->
        <!-- <div class="skill-badges">
          <div class="badge badge-1">
            <span class="badge-icon">💻</span>
            <span>Full Stack</span>
          </div>
          <div class="badge badge-2">
            <span class="badge-icon">🚀</span>
            <span>Product Manager</span>
          </div>
          <div class="badge badge-3">
            <span class="badge-icon">📱</span>
            <span>Mobile Apps</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const typeValue = ref('')
const isTyping = ref(false)
let typeInterval: number | null = null

// Array of texts to type
const textToType = [
  'Product manager',
  'Frontend Developer',
  'Backend Developer',
  'Mobile Developer'
]

let textArrayIndex = 0
let charIndex = 0
let isDeleting = false

function typeText() {
  const currentText = textToType[textArrayIndex]

  if (isDeleting) {
    typeValue.value = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typeValue.value = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  isTyping.value = true

  // Typing speed
  let typeSpeed = isDeleting ? 50 : 100

  // If word is complete
  if (!isDeleting && charIndex === currentText.length) {
    // Make a pause at the end
    typeSpeed = 1500
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    // Move to next word
    textArrayIndex = (textArrayIndex + 1) % textToType.length
    // Pause before typing next word
    typeSpeed = 500
  }

  typeInterval = setTimeout(typeText, typeSpeed)
}

onMounted(() => {
  typeText()
})

onBeforeUnmount(() => {
  if (typeInterval) clearTimeout(typeInterval)
})
</script>

<style scoped>
/* Layout and container */
.home-container {
  position: relative;
  height: auto;
  overflow: hidden;
}

.container {
  position: relative;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
}

/* SVG Background Decorations */
.svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.svg-shape {
  position: absolute;
  opacity: 0.1;
  fill: var(--color-primary);
  filter: blur(1px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: 10%;
  left: -50px;
  animation: float 8s ease-in-out infinite 1s;
}

.shape-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  right: 5%;
  animation: float 7s ease-in-out infinite 0.5s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(30px) rotate(5deg);
  }
}

/* Text animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.2s backwards;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

/* Details section */
.details {
  width: 50%;
  text-align: left;
  z-index: 2;
}

.greeting-wrapper {
  margin-bottom: 20px;
}

.greeting-text {
  font-size: 1.5rem;
  color: var(--color-text-secondary-active);
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: fadeInUp 0.8s ease-out;
}

.name-text {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 10px 0;
  animation: fadeInUp 0.8s ease-out 0.1s backwards;
}

.role-text {
  font-size: 1.5rem;
  margin: 20px 0;
  color: var(--color-text);
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-secondary-active);
  margin: 20px 0 30px 0;
  animation: fadeInUp 0.8s ease-out 0.3s backwards;
}

/* Social links */
.social-links {
  display: flex;
  gap: 20px;
  margin: 30px 0;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  color: var(--color-primary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.3rem;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  z-index: -1;
  transition: left 0.3s ease;
}

.social-link:hover {
  color: var(--color-white);
  transform: translateY(-5px);
}

.social-link:hover::before {
  left: 0;
}

/* Action buttons */
.action-buttons {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.btn {
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-3px);
}

/* Image section */
.image-section {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.profile-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.profile-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(249, 115, 22, 0.2);
  animation: fadeInRight 0.8s ease-out 0.2s backwards;
  border: 4px solid var(--color-primary);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-frame:hover .profile-image {
  transform: scale(1.05);
}

/* Floating elements around profile */
.floating-element {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary), transparent);
  opacity: 0.3;
  animation: float 4s ease-in-out infinite;
}

.element-1 {
  width: 80px;
  height: 80px;
  top: -20px;
  right: -20px;
  animation-delay: 0s;
}

.element-2 {
  width: 60px;
  height: 60px;
  bottom: 20px;
  left: -30px;
  animation-delay: 1s;
}

.element-3 {
  width: 70px;
  height: 70px;
  top: 50%;
  right: -40px;
  animation-delay: 0.5s;
}

/* Skill badges */
.skill-badges {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 30px;
}

.badge {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 20px;
  background-color: var(--color-bg-secondary-active);
  border-radius: 12px;
  border-left: 4px solid var(--color-primary);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out backwards;
}

.badge-1 {
  animation-delay: 0.5s;
}

.badge-2 {
  animation-delay: 0.6s;
}

.badge-3 {
  animation-delay: 0.7s;
}

.badge:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.15);
}

.badge-icon {
  font-size: 1.8rem;
}

.badge span:last-child {
  font-weight: 600;
  color: var(--color-text);
}

/* Typing animation styles */
.typed-text {
  color: var(--color-primary);
  font-weight: bold;
  animation: colorPulse 3s ease-in-out infinite;
}

.cursor {
  display: inline-block;
  width: 3px;
  background-color: var(--color-primary);
  margin-left: 4px;
  animation: blink 1s infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes blink {

  0%,
  49%,
  100% {
    background-color: var(--color-primary);
  }

  50% {
    background-color: transparent;
  }
}

@keyframes colorPulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .container {
    flex-direction: column;
    gap: 30px;
  }

  .details,
  .image-section {
    width: 100%;
  }

  .name-text {
    font-size: 3rem;
  }

  .image-section {
    order: -1;
  }
}

@media (max-width: 768px) {
  .home-container {
    background: linear-gradient(150deg, var(--color-bg) 55%, var(--color-primary) 45%);
    height: auto;
  }

  .container {
    margin: 0 auto;
    padding: 20px;
    flex-direction: column;
  }

  .details {
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    text-align: center;
  }

  .name-text {
    font-size: 2rem;
  }

  .role-text {
    font-size: 1.2rem;
  }

  .description-text {
    font-size: 1rem;
  }

  .social-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .action-buttons {
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .image-section {
    width: 100%;
    max-width: 300px;
  }

  .skill-badges {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

  .badge {
    padding: 12px 15px;
    font-size: 0.9rem;
  }

  .svg-shape {
    opacity: 0.05;
  }
}

@media (max-width: 480px) {
  .name-text {
    font-size: 1.5rem;
  }

  .greeting-text {
    font-size: 1.2rem;
  }

  .social-link {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .btn {
    padding: 12px 24px;
    font-size: 0.9rem;
  }

  .badge {
    flex-direction: column;
    text-align: center;
  }
}
</style>