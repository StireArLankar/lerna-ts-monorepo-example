import { resolve } from 'path'

import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: '../../build',
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      common: resolve(__dirname, '..', '..', 'common'),
    },
  },
})
