const tailwindPlugin = () => ({
  name: 'tailwind-plugin',
  configurePostCss(postcssOptions) {
    postcssOptions.plugins = [require('@tailwindcss/postcss')];
    return postcssOptions;
  },
});

export default tailwindPlugin;
