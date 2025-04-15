import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for root domain deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
