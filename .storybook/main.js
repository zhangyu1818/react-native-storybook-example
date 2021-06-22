const rules = [
  {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
          '@babel/preset-flow',
        ],
        plugins: [
          'babel-plugin-react-native-web',
          [
            'babel-plugin-module-resolver',
            {
              alias: {
                '^react-native$': 'react-native-web',
              },
            },
          ],
        ],
      },
    },
  },
];
const alias = {
  '@storybook/react-native': '@storybook/react',
  'react-native$': 'react-native-web',
  'react-native-svg$': 'react-native-svg-web',
};

module.exports = {
  webpackFinal: config => {
    return {
      ...config,
      resolve: {alias: {...config.resolve.alias, ...alias}},
      module: {...config.module, rules},
    };
  },
  stories: [
    '../storybook/stories/**/*.stories.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
};
