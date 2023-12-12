import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/ss
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  },
  plugins: [react() /* ssr({ prerender: true }) */],
});
