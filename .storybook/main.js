module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-mdx-embed',
  ],
  framework: '@storybook/html',
  features: {
    postcss: false,
  },
};
