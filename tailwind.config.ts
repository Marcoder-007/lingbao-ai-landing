import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3A6B",
        accent: "#D4A853",
        success: "#2E8B57",
        "text-main": "#1A1A2E",
        "text-muted": "#6B7280",
        border: "#E5E7EB",
        danger: "#DC2626",
        "success-fill": "#16A34A",
        "bg-sub": "#F7F8FA",
        "bg-sub-alt": "#F0F4F8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "sans-serif"],
        heading: ["var(--font-noto)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "1200px" },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
