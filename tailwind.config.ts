import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        opacityIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
        opacityIn: "opacityIn 1s ease-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#FBF8ED",
          100: "#F5EFD9",
          200: "#EDE3B5",
          400: "#D5C18A",
          500: "#C0AC72",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      wordSpacing: {
        normal: "normal",
        1: "0.5rem",
        2: "1rem",
        4: "2rem",
        6: "3rem",
        8: "4rem",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          o: (value) => ({
            "--tw-offset": value,
          }),
        },
        { values: theme("margin") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "word-spacing": (value) => ({
            wordSpacing: value,
          }),
        },
        { values: theme("wordSpacing") }
      );
    }),
    plugin(function ({ addUtilities, theme }) {
      const colors = theme("colors");
      const textOutlineUtilities: Record<string, any> = {};

      Object.entries(colors as any).forEach(([colorName, colorValue]) => {
        if (typeof colorValue === "string") {
          textOutlineUtilities[`.text-outline-${colorName}`] = {
            textShadow: `-2px -2px 0 ${colorValue}, 2px -2px 0 ${colorValue}, -2px 2px 0 ${colorValue}, 2px 2px 0 ${colorValue}`,
          };
        } else if (typeof colorValue === "object") {
          Object.entries(colorValue as any).forEach(([shade, shadeValue]) => {
            textOutlineUtilities[`.text-outline-${colorName}-${shade}`] = {
              textShadow: `-2px -2px 0 ${shadeValue}, 2px -2px 0 ${shadeValue}, -2px 2px 0 ${shadeValue}, 2px 2px 0 ${shadeValue}`,
            };
          });
        }
      });

      addUtilities(textOutlineUtilities);
    }),
  ],
} satisfies Config;
