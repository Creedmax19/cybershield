/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40h-40v-40z\' fill=\'none\'/%3E%3Cpath d=\'M0 0h1v40h-1v-40z\' fill=\'%23ffffff\' fill-opacity=\'0.3\'/%3E%3Cpath d=\'M0 0h40v1h-40v-1z\' fill=\'%23ffffff\' fill-opacity=\'0.3\'/%3E%3C/svg%3E")'
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.05)' },
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
      }
    },
  },
  plugins: [],
};
