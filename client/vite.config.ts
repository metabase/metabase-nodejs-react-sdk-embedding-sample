import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const devPort = parseInt(env.CLIENT_PORT) || 3100;
  const previewPort = parseInt(env.CLIENT_PORT) || undefined;

  return {
    plugins: [react()],
    server: {
      port: devPort,
    },
    preview: {
      port: previewPort,
    },
  };
});





