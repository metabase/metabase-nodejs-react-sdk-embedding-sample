/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")

  const devPort = parseInt(env.CLIENT_PORT, 10) || 3100
  const previewPort = parseInt(env.CLIENT_PORT) || undefined

  return {
    plugins: [react()],
    server: {
      // eslint-disable-next-line no-undef
      port: devPort
    },
    preview: {
      port: previewPort
    },
  }
});
