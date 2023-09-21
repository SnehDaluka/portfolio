import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#08E95E",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        move: "move 1s ease-in-out infinite alternate",
        glow_move: "glow_move  1s ease-in-out  infinite alternate",
        glow: "glow  0.8s ease-in-out  infinite alternate",
        show: "show 2s ease-in-out",
        show_right: "show_right 2s ease-in-out 1",
        show_left: "show_left 2s ease-in-out 1",
        show_top: "show_top 1.5s ease-in-out 1",
        show_down: "show_down 1.5s ease-in-out 1",
        display: "display 20s infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "tranlateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        show_right: {
          "0%": { opacity: "0", transform: "translate3d(100px,0,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        show_left: {
          "0%": { opacity: "0", transform: "translate3d(-100px,0,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        show_top: {
          "0%": { opacity: "0", transform: "translate3d(0,-30px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        show_down: {
          "0%": { opacity: "0", transform: "translate3d(0,30px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        glow_move: {
          "0%": {
            boxShadow: "-10px 10px 10px rgba(37,99,235,0.5)",
            transform: "tranlateY(10px)",
          },
          "50%": { boxShadow: "-10px 10px 18px rgba(107,33,168,0.5)" },
          "100%": {
            boxShadow: "-10px 10px 25px rgba(109,40,217,0.5)",
            transform: "translateY(-10px)",
          },
        },
        glow: {
          "0%": { boxShadow: "-10px 10px 10px rgba(168,85,247,0.5)" },
          "100%": { boxShadow: "-10px 10px 25px rgba(88,28,135,0.5)" },
        },
        display: {
          "0%": {
            transform: "translateX(200px)",
            opacity: "0",
          },
          "10%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "20%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "30%": {
            transform: "translateX(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(-200px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
