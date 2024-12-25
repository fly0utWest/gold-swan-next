import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#FBF8ED", // Very light tint
          100: "#F5EFD9", // Light tint
          200: "#EDE3B5", // Softer tint
          400: "#D5C18A", // Medium shade
          500: "#C0AC72", // Rich tone
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
      const generateColorMap = (colors: any, callback: any): any => {
        return Object.entries(colors).reduce((acc: any, [color, value]) => {
          if (typeof value === "string") {
            return { ...acc, ...callback(color, value) };
          } else {
            const nestedColors = generateColorMap(value, callback);
            return { ...acc, ...nestedColors };
          }
        }, {});
      };

      const colorMap = generateColorMap(
        theme("colors"),
        (color: string, value: string) => ({
          [`.text-outline-${color}`]: {
            textShadow: `-2px -2px 0 ${value}, 2px -2px 0 ${value}, -2px 2px 0 ${value}, 2px 2px 0 ${value}`,
          },
        })
      );

      addUtilities(colorMap);
    }),
  ],
} satisfies Config;
