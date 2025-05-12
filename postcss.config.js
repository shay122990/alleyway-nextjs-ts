module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-url": {
      url: (asset) => asset.url || "",
    },
  },
};
