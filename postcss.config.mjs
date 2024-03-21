import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssMixins from "postcss-mixins";
import postcssImport from "postcss-import";

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [tailwind, autoprefixer, postcssMixins, postcssImport],
};
