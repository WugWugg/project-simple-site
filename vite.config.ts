import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // This alias is used for eslint's resolution of public data
      // It's counter-part is in .eslintrc.cjs under the setting with key import/resolver
      '$public': ''
    }
  },
  plugins: [ eslint(), svelte() ]
});
