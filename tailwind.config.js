/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#10B981",
                "background-light": "#F3F4F6", "background-dark": "#0D1117",
                "text-light": "#111827",
                "text-dark": "#E5E7EB",
                "text-secondary-light": "#4B5563",
                "text-secondary-dark": "#9CA3AF"
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
