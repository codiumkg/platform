/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react"
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#30cfc7",
          foreground: "#ffffff"
        },
      }
    },
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
            content1: "#23211f",
            content2: "#23211f",
            content3: "#23211f",
            content4: "#23211f",
            // default: {
            //   DEFAULT: "#232119",
            // },
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
          }
        
        },
        "codium-light": {
          extend: "light",
          layout: {},
          colors: {
            content1: "#ffffff",
            content2: "#ffffff",
            content3: "#ffffff",
            content4: "#ffffff",
            default: {
              DEFAULT: "#f8f8f8",
              100: "#f9f9f9",
              200: "#ffffff"
            },
            background: {
              DEFAULT: "#f2f2f2",
              900: '#f3f3f3',
              800: '#f5f5f5',
              700: '#f8f8f8',
              600: '#f9f9f9',
              500: '#d9d9d9',
              400: '#d5d5d5',
              300: '#d2d2d2',
              200: '#e7e7e7',
              100: '#e5e5e5',
              50: '#e1e1e1',

            },
            focus: "#ffc38d",
            foreground: "#404040",
            bgSecondary: {
              DEFAULT: "#ffffff",
            },
            highlight: "#e5e5e5",
          }
        
        },
      }
    })
  ]
}

