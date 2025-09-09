// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee 20s linear infinite",
      },
    },
  },
};
