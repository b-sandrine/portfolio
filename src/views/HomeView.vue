<template>
  <div class="home-container">
    <div class="container flex h-[100%] text-center">
      <div class="details h-auto">
        <h5 class="text-">Hi, I am</h5>
        <h3>Sandrine DUSHIMIMANA</h3>
        <h6>
          <span>I am a </span>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
        </h6>
        <p>I am committed to playing a pivotal role in driving the technological transformations in Africa. Most importantly, I am highly committed to and excited to utilize study opportunities to broaden my horizons and intellectual curiosity.</p>
        <div class="icon flex mt-6 w-[40%]">
          <a href="https://www.instagram.com/d_bs02/" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="https://github.com/b-sandrine" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dushimimana-sandrine-219b891b9/" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-linkedin"></i>
          </a>
          <a href="mailto:sanrdushimimana@gmail.com">
            <i class="pi pi-envelope"></i>
          </a>
          <a href="https://x.com/sanrdushimimana" target="_blank" rel="noopener noreferrer">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="https://dsandrineteachestech.blogspot.com/" target="_blank" title="Checkout my blog" rel="noopener noreferrer">
            <i class="pi pi-pen-to-square"></i>
          </a>
        </div>
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
@media (max-width: 768px) {
  .home-container {
    background: linear-gradient(150deg, #FAFAFA 55%, #F97316 45%);
    height: auto;
  }

  .container {
    margin: 0 auto;
    padding: 20px;
  }

  .flex {
    display: block;
    flex-direction: column;
  }

  .details {
    margin: 0 auto;
    padding: 20px;
    width: 100%;
  }
}

.typed-text {
  color: #F97316;
  font-weight: bold;
}

.cursor {
  display: inline-block;
  width: 3px;
  background-color: #F97316;
  margin-left: 4px;
  animation: blink 1s infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes blink {
  0% { background-color: #F97316; }
  49% { background-color: #F97316; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100% { background-color: #F97316; }
}

.icon a {
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.icon a:hover {
  color: #F97316;
}
</style>