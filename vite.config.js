import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Change this to match your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: "/redux-tdla/", // Replace with your actual repository name
});
