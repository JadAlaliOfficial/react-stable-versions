/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: "class", // or 'media' for system preference
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "lighter-background":"var(--color-lighter-background)",
        "lighter-foreground":"var(--color-lighter-foreground)",

        card: "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        // Add welcome page specific colors
        "welcome-background": "var(--color-welcome-background)",
        "welcome-foreground": "var(--color-welcome-foreground)",
        "welcome-secondary": "var(--color-welcome-secondary)",
        "welcome-border": "var(--color-welcome-border)",
        "welcome-button": "var(--color-welcome-button)",
        "welcome-button-text": "var(--color-welcome-button-text)",

        popover: "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",

        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",

        secondary: "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",

        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",

        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",

        destructive: "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",

        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",

        "chart-1": "var(--color-chart-1)",
        "chart-2": "var(--color-chart-2)",
        "chart-3": "var(--color-chart-3)",
        "chart-4": "var(--color-chart-4)",
        "chart-5": "var(--color-chart-5)",

        sidebar: "var(--color-sidebar)",
        "sidebar-foreground": "var(--color-sidebar-foreground)",
        "sidebar-primary": "var(--color-sidebar-primary)",
        "sidebar-primary-foreground": "var(--color-sidebar-primary-foreground)",
        "sidebar-accent": "var(--color-sidebar-accent)",
        "sidebar-accent-foreground": "var(--color-sidebar-accent-foreground)",
        "sidebar-border": "var(--color-sidebar-border)",
        "sidebar-ring": "var(--color-sidebar-ring)",
      },
      boxShadow: {
        custom: "var(--shadow-custome)", // White shadow for dark mode

      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
