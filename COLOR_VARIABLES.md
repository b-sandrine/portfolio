# Color Variables Configuration

This document outlines all the CSS variables defined in your portfolio for both light and dark themes.

## CSS Variables Setup

All color variables are defined in `src/assets/base.css` and automatically applied to both light and dark themes.

### Primary Colors

```css
--color-primary: #f97316; /* Orange accent color */
--color-primary-dark: #ea580c; /* Darker orange for hover states */
--color-primary-light: #fb923c; /* Lighter orange for states */
```

### Light Theme Colors

```css
--color-bg-light: #fafafa; /* Light background */
--color-bg-secondary: #f9faff; /* Light secondary background (cards) */
--color-bg-tertiary: #f2f4f7; /* Light tertiary background */
--color-text-light: #000000; /* Light mode text */
--color-text-secondary: #25282b; /* Light mode secondary text */
--color-border-light: #25282b; /* Light mode borders */
```

### Dark Theme Colors

```css
--color-bg-dark-primary: #0f172a; /* Dark primary background */
--color-bg-dark-secondary: #1e293b; /* Dark secondary background */
--color-bg-dark-tertiary: #334155; /* Dark tertiary background */
--color-text-dark: #f1f5f9; /* Dark mode text */
--color-text-dark-secondary: #cbd5e1; /* Dark mode secondary text */
--color-border-dark: #334155; /* Dark mode borders */
```

### Utility Colors

```css
--color-white: #ffffff; /* White */
--color-gray-300: #d1d5db; /* Light gray */
--color-gray-400: #9ca3af; /* Medium gray */
```

### Active Theme Variables

These variables automatically switch based on the theme:

```css
--color-bg: var(--color-bg-light); /* Active background */
--color-bg-secondary-active: var(--color-bg-secondary); /* Active secondary background */
--color-text: var(--color-text-light); /* Active text color */
--color-text-secondary-active: var(--color-text-secondary); /* Active secondary text */
--color-border: var(--color-border-light); /* Active border color */
```

## How It Works

1. **Light Theme (Default)**: Variables use light theme values
2. **Dark Theme (System Preference)**: When system prefers dark mode, variables automatically switch
3. **Dark Theme (Manual Toggle)**: When `.dark` class is added to `<html>`, variables switch to dark theme

## Usage Examples

### In CSS

```css
.my-element {
  background-color: var(--color-bg);
  color: var(--color-text);
  border-color: var(--color-border);
}
```

### In Vue Components (Scoped Styles)

```vue
<style scoped>
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-border);
}
</style>
```

## Files Using CSS Variables

- `src/assets/main.css` - Main stylesheet
- `src/assets/base.css` - Variable definitions
- `src/components/Navbar.vue` - Navigation bar
- `src/components/ProjectCard.vue` - Project cards
- `src/views/HomeView.vue` - Home page
- `src/views/AboutView.vue` - About section
- `src/views/HireMeView.vue` - Hire me section
- `index.html` - Root HTML file

## Adding New Colors

To add new colors:

1. Add the color variables in `src/assets/base.css` under the `:root` selector
2. Add both light and dark theme values
3. Use the variable name in your CSS: `color: var(--your-new-color)`

Example:

```css
:root {
  --color-new-shade: #yourcolor;
}

.dark {
  --color-new-shade: #yourdarkcolor;
}
```

## Dark Mode Toggle

The dark mode is toggled via the sun/moon icon in the navbar. The preference is automatically saved to `localStorage` and persists across sessions.
