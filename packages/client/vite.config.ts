import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: '../../build',
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});