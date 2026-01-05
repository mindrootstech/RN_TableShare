// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: [['react-native-worklets/plugin']],
// };

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    ['react-native-worklets/plugin'], // keep this LAST
  ],
};
