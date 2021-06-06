import { defineConfig } from "vite"
import path from 'path'
const SRC = path.resolve(__dirname, "./src")

export default defineConfig({
  mode: 'development', 

  server: {
    open: true,
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  define: {
    // '__DEV__': JSON.stringify("dev")
    '__ENV__':JSON.stringify("develop"),
    'process.env': {
      __DEV__: true
    }
  },
     
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@api": path.join(SRC, "api"),
      "@assets": path.join(SRC, "assets"),
    },
  },
})