import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// Let's add some env variables to the code

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return {
    plugins: [vue()],
    define: {
      __MOCK__: `"${process.env.MOCK}"`
    }
  }
})
