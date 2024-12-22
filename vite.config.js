import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: "/Visionary-Club.github.io/",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '18' }]],
      },
    }),
  ],
});