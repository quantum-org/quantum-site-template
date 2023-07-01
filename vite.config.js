import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    ssr: false,
  }),
  ViteRadar({
  // Google Analytics tag injection
  analytics: {
    id: 'G-D8QVPKBNZ8',
  },
})
]
})
