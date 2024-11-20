/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // 新增
    './src/**/*.{js,ts,jsx,tsx}',        // 如果使用 src 目录
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#e0c3fc',
        'gradient-end': '#8ec5fc',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'], // 确保 group-hover 变体生效
    },
  },
  plugins: [],
};
