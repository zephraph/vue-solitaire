/* eslint-env node */
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");

module.exports = {
  chainWebpack: config =>
    config.resolve
      .plugin("directory-named-webpack-pllugin")
      .use(DirectoryNamedWebpackPlugin, true)
};
