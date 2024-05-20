import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/XO_Challenge/',  // This should match your repository name
  plugins: [react()],
});
