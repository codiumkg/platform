/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "codium-dark",
      layout: {},
      themes: {
        "codium-dark": {
          extend: "dark",
          layout: {},
          colors: {

            background: {
              DEFAULT: "#1a1817",
              900: '#f3f2f1',
              800: '#d8d8d8',
              700: '#bfbfbf',
              600: '#a5a5a5',
              500: '#8c8c8c',
              400: '#727272',
              300: '#595959',
              200: '#3f3f3f',
              100: '#262626',
              50: '#0e0c0c',

            },
            focus: "#ffc38d",
            foreground: "#f7e3db",
            bgSecondary: {
              DEFAULT: "#23211f",
            },
            highlight: "#403d39",
            secondary: {
              DEFAULT: "#a0f538",
              foreground: "#1a1817"
            },
            primary: {
              foreground: "#1a1817",
              DEFAULT: "#ffc38d",
              900: '#fff1dd',
              800: '#ffd7b0',
              700: '#ffbc80',
              600: '#fea14e',
              500: '#fe871e',
              400: '#e56e07',
              300: '#b25502',
              200: '#803c00',
              100: '#4e2300',
              50: '#1f0a00',
            }
          }
        
        },
      }
    })
  ]
}

