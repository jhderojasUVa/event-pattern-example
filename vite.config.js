import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


console.log(process.env.MOCK)
// console.log('mock', import.meta.env.MOCK)
// console.log('vue_app_mock', import.meta.env.VUE_APP_MOCK)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  console.log(process.env.MOCK)
  return {
    plugins: [vue()],
    define: {
      __MOCK__: `"${process.env.MOCK}"`
    }
  }
})
