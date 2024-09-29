import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':{
        target: 'http://localhost:5000',  // Backend API server
        changeOrigin: true,
        secure: false,
      },
      '/book':"http://localhost:5000",
    },
  },
  plugins: [react()],
})