module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-mdx-embed',
  ],
  staticDirs: ['../static'],
  framework: '@storybook/html',
  features: {
    postcss: false,
  },
};
