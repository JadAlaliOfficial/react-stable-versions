/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: "class", // or 'media' for system preference
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // background
        background: "var(--color-background)",
        "lighter-background": "var(--color-lighter-background)",
        "auth-background": "var(--color-auth-background)",
        "auth-card-background": "var(--color-auth-card-background)",
        "sidebar-background": "var(--color-sidebar-background)",
        "header-background": "var(--color-header-background)",
        "content-background": "var(--color-content-background)",
        "selected-background": "var(--color-selected-background)",
        "button-background": "var(--color-button-background)",
        "auth-form-input-background": "var(--color-auth-form-input-background)",
        
        //foreground
        foreground: "var(--color-foreground)",
        "lighter-foreground": "var(--color-lighter-foreground)",
        "sidebar-foreground": "var(--color-foreground)",
        "header-foreground": "var(--color-foreground)",
        "content-foreground": "var(--color-foreground)",
        "auth-form-foreground": "var(--color-auth-form-foreground)",
        
        //border
        border: "var(--color-border)",
        "header-border": "var(--color-header-border)",
        "sidebar-border": "var(--color-sidebar-border)",

        // Card-related colors
        card: "var(--color-card-background)",
        "card-foreground": "var(--color-card-foreground)",
        "bg-card-foreground": "var(--color-bg-card-foreground)",
        "no-bg-card-foreground": "var(--color-no-bg-card-foreground)",
        "bg-card": "var(--color-bg-card-background)",
        "no-bg-card": "var(--color-no-bg-card-background)",
        "bg-card-header": "var(--color-bg-card-header-background)",
        "bg-card-body": "var(--color-bg-card-body-background)",
        
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
        custom: "var(--shadow-custom)", // White shadow for dark mode
        card: "var(--color-card-shadow)", // Added card shadow
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
