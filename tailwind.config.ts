import type { Config } from "tailwindcss"
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1400px",
      mobile: { max: "760px" },
      mobileH: {  min: "520px",max: "760px" },
      mid: { min: "760px", max: "992px" },
      tab: { min: "760px", max: "1280px" },
      desktop: { min: "1280px" },
      wide: { min: "1480px" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        'imcrox-gt-bro-light': 'linear-gradient(to right, #0085ff 0%, #ff3370 52%, #ffaa33 100%)',
        'imcrox-gt-bro-dark': 'linear-gradient(to right,#4da6ff 0%, #ff3358 52%, #ffb84d 100%)',
      
        'imcrox-gt-bp': 'linear-gradient(to right,#64B4FF 0%, #C489FF 100%)',
        'imcrox-gt-bp-21': 'linear-gradient(to right, rgba(149, 204, 255, 0.21) 0%, rgba(221, 187, 255, 0.21) 100%)',
      },
      colors: {

        // Light Mode
        "imcrox-color-blue-light": "#0085FF",
        "imcrox-color-redrose-light": "#FF3370",
        "imcrox-color-orange-light": "#FFAA33",
        "imcrox-color-green-light": "#33CC99",
      
        "imcrox-primary-bcolor-light": "#FFFFFF",
        "imcrox-secondary-bcolor-light": "#EDEDED",
        "imcrox-tertiary-bcolor-light": "#CCCCCC",
        "imcrox-highlight-bcolor-light": "#DDDDDD",
      
        "imcrox-primary-tcolor-light": "#333333",
        "imcrox-secondary-tcolor-light": "#D9D9D9",
      
        // Dark Mode
        "imcrox-color-redrose-dark": "#FF3358",
        "imcrox-color-blue-dark": "#4DA6FF",
        "imcrox-color-orange-dark": "#FFB84D",
        "imcrox-color-green-dark": "#4DD6A8",
      
        "imcrox-primary-bcolor-dark": "#000000",
        "imcrox-secondary-bcolor-dark": "#131313",
        "imcrox-tertiary-bcolor-dark": "#1A1A1A",
        "imcrox-highlight-bcolor-dark": "#232323",
      
        "imcrox-primary-tcolor-dark": "#EAEAEA",
        "imcrox-secondary-tcolor-dark": "#9C9C9C",

        "imcrox-brcolor-light": "#0000001F",
        "imcrox-brcolor-dark": "#FFFFFF1F",
        "imcrox-white-64":"#FFFFFFA3",


        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
} satisfies Config

export default config


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}