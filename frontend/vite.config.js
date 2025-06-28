import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',    // <--- Agregá esta línea para que las rutas sean relativas
  plugins: [react()],
  server: {
    port: 4042,
  }
})

