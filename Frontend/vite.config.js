import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':"http://localhost:8000/user",
      '/user/login': {
        target: 'http://localhost:5000',  // or the appropriate backend URL
        changeOrigin: true,
        secure: false,
      }
    },
  },
  plugins: [react()],
})