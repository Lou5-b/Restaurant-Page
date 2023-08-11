const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
        ourmission: './src/ourmission.js',
      },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};