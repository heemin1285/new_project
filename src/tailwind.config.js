// tailwind.config.js
import { defineConfig } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontSize: {
        base: "18px", // 기존 16px → 18px로 증가
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
    },
  },
},
  plugins: [
    aspectRatio,
    // 다른 플러그인 추가 가능
  ],



  
});