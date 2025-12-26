import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import unpluginVueRouter from "unplugin-vue-router/vite";

// https://vite.dev/config/
const routesFolder = "src/pages";
export default defineConfig({
  plugins: [
    vue(),
    unpluginVueRouter({
      importMode: "sync",
      routesFolder: [
        {
          src: routesFolder,
          filePatterns: ["**/index"],
          path(file) {
            return "/" + file.slice(file.lastIndexOf(routesFolder) + routesFolder.length).toLowerCase()
                  .replace(/layout\.vue/g, ".vue")
          }
        },
        {
          src: routesFolder,
          extensions: [".vue"],
          filePatterns: ["**/layout"],
          path(file)
          {
              return file.slice(file.lastIndexOf(routesFolder) + routesFolder.length).toLowerCase()
                  .replace(/layout\.vue/g, ".vue");
          },
        }
      ]
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
