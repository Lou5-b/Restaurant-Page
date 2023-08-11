const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
      },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};