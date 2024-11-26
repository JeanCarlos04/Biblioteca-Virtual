import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    port: 5173, 
  },

  /*si quitas
  server: {
    port: 5173, 
  },

  por defecto se pondra 5173
  O sin eso no funciona el tunnel?
  */ 
=======
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb
});
