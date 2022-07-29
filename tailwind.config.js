/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "font-color": "var(--font-color)",
        "loading-color": "var(--loading-color)",
        "bg-color": "var(--bg-color)",
        "loading-bg-color": "var(--loading-bg-color)",
        "github-color": "var(--github-color)",
        "linkedIn-color": "var(--linkedIn-color)",
        "card-color": "var(--card-color)",
      },
      keyframes: {
        bounce: {
          "0%": {
            top: "60px",
            height: "5px",
            borderRadius: "50px 50px 25px 25px",
            transform: "scaleX(1.7)",
          },
          "40%": {
            height: "20px",
            borderRadius: "50%",
            transform: "scaleX(1)",
          },
          "100%": { top: "0%" },
        },
      },
      animation: { "loading-bounce": "bounce 0.5s ease infinite alternate" },
    },
  },
  plugins: [],
};

// 0% {
//   top: 60px;
//   height: 5px;
//   border-radius: 50px 50px 25px 25px;
//   transform: scaleX(1.7);
// }
// 40% {
//   height: 20px;
//   border-radius: 50%;
//   transform: scaleX(1);
// }
// 100% {
//   top: 0%;
// }
