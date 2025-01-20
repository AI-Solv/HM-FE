import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "365px", // 커스텀 브레이크포인트: 365px 이상일 때 적용
        sm: "460px",
        md: "640px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-xs": { max: "350px" }, // 커스텀 브레이크포인트: 350px 이하일 때 적용
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "real-screen": "calc(var(--vh) * 100)", // 100vh를 실시간으로 계산
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)", // 최소 높이로 설정
    },
  },
  plugins: [],
} satisfies Config;
