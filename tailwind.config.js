/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Core theme
          'base-theme': 'var(--base-theme, #c26a23)',
          'base-theme-light': 'var(--base-theme-light, #fff4eb)',
          'base-theme-dark': 'var(--base-theme-dark, #e76f51)',

          // Gradients
          'bg-gradient-light': 'var(--bg-gradient-light, #ffe8d6)',
          'bg-gradient-dark': 'var(--bg-gradient-dark, #f9bb8b)',
          'section-gradient-from': 'var(--section-gradient-from, #fffbeb)',
          'section-gradient-to': 'var(--section-gradient-to, #fed7aa)',

          // Font colors
          'font-color-light': 'var(--base-theme-font-color-light, #ffe8d6)',
          'font-color-dark': 'var(--base-theme-font-color-dark, #6a2c1a)',

          // Text & accent
          'primary-color': 'var(--primary-color, #c26a23)',
          'primary-text': 'var(--primary-text, #6a2c1a)',
          'accent-color': 'var(--accent-color, #f97316)',

          // Chips / pills
          'chip-bg': 'var(--chip-bg, #fed7aa)',
          'chip-bg-light': 'var(--chip-bg-light, #ffedd5)',
          'chip-text': 'var(--chip-text, #c2410c)',

          // Card surfaces
          'card-header-bg': 'var(--card-header-bg, #fff7ed)',
          'card-header-border': 'var(--card-header-border, #ffedd5)',
          'bg-surface': 'var(--bg-surface, #ffffff)',

          // Badges
          'badge-bg': 'var(--badge-bg, #ffedd5)',
          'badge-text': 'var(--badge-text, #c2410c)',
          'badge-current-bg': 'var(--badge-current-bg, #dcfce7)',
          'badge-current-text': 'var(--badge-current-text, #15803d)',
          'badge-break-bg': 'var(--badge-break-bg, #f3f4f6)',
          'badge-break-text': 'var(--badge-break-text, #4b5563)',

          // Accent borders
          'border-current': 'var(--border-current, #22c55e)',
          'border-break': 'var(--border-break, #9ca3af)',

          // Success
          'success-color': 'var(--success-color, #22c55e)',
          'success-bg': 'var(--success-bg, #16a34a)',

          // Text
          'text-secondary': 'var(--text-secondary, #4b5563)',
          'text-muted': 'var(--text-muted, #6b7280)',
        },
        borderColor: {
          'theme-current': 'var(--border-current, #22c55e)',
          'theme-break': 'var(--border-break, #9ca3af)',
          'theme-default': 'var(--base-theme, #c26a23)',
        },
      },
    },
    plugins: [],
  }
