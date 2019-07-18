const path = require('path');

module.exports = {
  srcPath: path.resolve(__dirname, '../src'),
  templatePath: path.resolve(__dirname, '../src/index.html'),
  filenamePath: path.resolve(__dirname, '../index.html'),
  outputPath: path.resolve(__dirname, '../dist'),
  contentBasePath: path.join(__dirname, 'dist'),
  appPath: path.resolve(__dirname, '..'),
}