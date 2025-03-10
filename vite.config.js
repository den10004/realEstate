import { defineConfig } from "vite";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: "",
  assetsInclude: ["**/*.ico"],
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: {
        plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }],
      },
    }),
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./index.html",
        thanks: "./thanks.html",
        privacy: "./privacy.html",
      },
    },
  },
});
