const path = require("path")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ["class", "class"],
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      aspectRatio: {
        "1/1": "1/1",
        "16/9": "16/9",
        "3/4": "3/4",
        "4/3": "4/3",
        "2/1": "2/1",
        "4/1": "4/1",
      },
      colors: {
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        white: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--white-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        heading1: [
          "clamp(2.25rem, 2.25vw + 1.8rem, 4.5rem)", // 72px-36px
          {
            lineHeight: "clamp(2.475rem, 2.475vw + 1.98rem, 4.95rem)", // 1.1 ratio
            letterSpacing: "-0.001em",
          },
        ],
        heading2: [
          "clamp(1.875rem, 1.875vw + 1.5rem, 3.75rem)", //60px - 30px
          {
            lineHeight: "clamp(2.25rem, 1.875vw + 1.875rem, 4.125rem)", // 1.2 ratio
            letterSpacing: "-0.001em",
          },
        ],
        heading3: [
          "clamp(1.625rem, 1.375vw + 1.35rem, 3rem)", // 48px - 26px
          {
            lineHeight: "clamp(2.113rem, 1.788vw + 1.755rem, 3.9rem)", // ~1.3 ratio
            letterSpacing: "-0.001em",
          },
        ],
        heading4: [
          "clamp(1.5rem, 1.125vw + 1.275rem, 2.625rem)", // 42px - 24px
          {
            lineHeight: "clamp(1.95rem, 1.463vw + 1.658rem, 3.413rem)", // ~1.3 ratio
            letterSpacing: "-0.001em",
          },
        ],
        heading5: [
          "clamp(1.375rem, 0.875vw + 1.2rem, 2.25rem)", //36px - 22px
          {
            lineHeight: "clamp(1.788rem, 1.138vw + 1.56rem, 2.925rem)", // ~1.3 ratio
          },
        ],
        heading6: [
          "clamp(1.25rem, 0.625vw + 1.125rem, 1.875rem)", // 30px - 20px
          {
            lineHeight: "clamp(1.625rem, 0.813vw + 1.463rem, 2.438rem)", // ~1.3 ratio
          },
        ],
        subtitle: [
          "clamp(1rem, 0.125vw + 0.975rem, 1.125rem)", //18px - 16px
          {
            lineHeight: "clamp(1.5rem, 0.188vw + 1.463rem, 1.688rem)", // 1.5 ratio
          },
        ],
        body: [
          "clamp(0.875rem, 0.125vw + 0.85rem, 1rem)", //16px - 14px
          {
            lineHeight: "clamp(1.313rem, 0.188vw + 1.275rem, 1.5rem)", // ~1.5 ratio
          },
        ],
        caption: [
          "clamp(0.875rem, 0vw + 0.875rem, 0.875rem)", //14px
          {
            lineHeight: "clamp(1.313rem, 0vw + 1.313rem, 1.313rem)", // 1.5 ratio
          },
        ],
        spacing: [
          "clamp(0.875rem, 0vw + 0.875rem, 0.875rem)", //14px
          {
            lineHeight: "clamp(1.313rem, 0vw + 1.313rem, 1.313rem)", // 1.5 ratio
            letterSpacing: "0.5em",
          },
        ],
        banner: [
          "clamp(3.438rem, 7.506vw + 1.495rem, 7.5rem)", //120-55
          {
            lineHeight: "clamp(3.438rem, 6.12vw + 1.854rem, 6.75rem)", // 0.9 ratio
          },
        ],
      },
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        dmsans: ["var(--font-dm-sans)"],
      },
      // fontFamily: {
      //   sans: [
      //     "Inter",
      //     "-apple-system",
      //     "BlinkMacSystemFont",
      //     "Segoe UI",
      //     "Roboto",
      //     "Helvetica Neue",
      //     "Ubuntu",
      //     "sans-serif",
      //   ],
      // },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        ring: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "bounce-left": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        enter: "enter 200ms ease-out",
        "bounce-left": "bounce-left 1s infinite",
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        bounce: "bounce 0.8s infinite",
      },
      spacing: {
        container: `max(
						  min(50px, 5vw),
						  calc((100vw - calc(1380px - 3rem * 2)) / 2)
						)`,
        "sm-container": `max(
						  1rem,
						  calc((100vw - calc(550px - 1rem * 2)) / 2)
						)`,
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), require("tailwindcss-animate")],
}
