import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/health-app/', // แทนที่ด้วยชื่อ repository ของคุณ
})
