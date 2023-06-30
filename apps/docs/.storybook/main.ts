export default {
  stories: ['../src/stories/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    enabled: true,
    defaultName: 'Documentation',
    autodocs: 'tag',
  },
};
