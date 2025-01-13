module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '~/navigations': './src/navigations',
          '~/screens': './src/screens',
          '~/components': './src/components',
          '~/assets': './src/assets',
          '~/constants': './src/constants',
          '~/utils': './src/utils',
          '~/services': './src/services',
          '~/store': './src/store',
          '~/hooks': './src/hooks',
          '~/types': './src/types',
        },
      },
    ],
  ],
};
