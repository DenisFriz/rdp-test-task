/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        danger: "#EF4444",
        info: "#EFF6FF",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        surfaceMuted: "#F1F5F9",
        textPrimary: "#020617",
        textSecondary: "#334155",
        textMuted: "#64748B",
        border: "#CBD5E1",
        neutral100: "#F8FAFC",
        neutral200: "#F1F5F9",
        neutral300: "#E2E8F0",
        neutral400: "#CBD5E1",
        neutral500: "#94A3B8",
        neutral600: "#64748B",
        neutral700: "#475569",
        neutral800: "#334155",
      },
    },
  },
  plugins: [],
};
