import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
    primary: '#0D9488',    // Teal/Verde azulado médico (da calma y confianza)
    secondary: '#0F172A',  // Azul marino profundo para textos principales
    accent: '#2DD4BF',     // Un toque más vibrante para hovers
    bg: '#F8FAFC',        // Gris azulado muy tenue para fondos de sección
    muted: '#64748B',      // Gris para subtítulos
  },
},
      borderRadius: {
        'apple': '22px',        
      }
    },
  },
  plugins: [],
};
export default config;