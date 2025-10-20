

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e21836',
        primaryDark: '#b3142b',
        secondary: '#2b6cb0',
        dark: '#1a202c',
        light: '#f7fafc'
      }
    },
  },
})


