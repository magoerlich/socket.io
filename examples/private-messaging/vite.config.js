import { fileURLToPath, URL } from 'node:url'

//import vue from '@vue/compat'
import createVuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            vue: '@vue/compat',
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    plugins: [
        createVuePlugin({
            template: {
                compilerOptions: {
                    compatConfig: { MODE: 2 }
                }
            }
        })
    ]
})