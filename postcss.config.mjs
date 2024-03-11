import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssMixins from "postcss-mixins";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [tailwind, autoprefixer, postcssMixins],
};
