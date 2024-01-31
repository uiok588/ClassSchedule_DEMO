import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

//電腦內開啟所使用
//要使用這一區塊才可以跑所有vue3終端機指令
/*
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
*/

//為了使用 gitHub pages 所設定

export default defineConfig({
  base: "ClassSchedule_DEMO",
  plugins: [],
  resolve: {
    alias: [],
  },
});
