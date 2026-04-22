import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

// Apply or remove dark class from html element
const applyDarkMode = (dark: boolean) => {
  const html = document.documentElement
  if (dark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
  localStorage.setItem('darkMode', String(dark))
}

// Initialize dark mode from localStorage or system preference
const initializeDarkMode = () => {
  const stored = localStorage.getItem('darkMode')

  if (stored !== null) {
    isDark.value = stored === 'true'
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  applyDarkMode(isDark.value)
}

export function useDarkMode() {
  // Toggle dark mode
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    applyDarkMode(isDark.value)
  }

  // Initialize on first use (client-side)
  if (typeof window !== 'undefined') {
    initializeDarkMode()
  }

  // Watch for changes (in case changed from another tab/window)
  watch(isDark, (newVal) => {
    applyDarkMode(newVal)
  })

  return {
    isDark,
    toggleDarkMode,
    initializeDarkMode,
  }
}
