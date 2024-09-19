import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// Vuetify
import Vuetify from 'vite-plugin-vuetify';

// Let's add some env variables to the code and add vuetify

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return {
    plugins: [
      vue(),
      Vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss',
        },
      }),
    ],
    define: {
      __MOCK__: `"${process.env.MOCK}"`
    }
  }
})
