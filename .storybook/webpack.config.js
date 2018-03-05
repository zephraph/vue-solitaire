/* eslint-env node */
module.exports = config => {
  config.resolve = {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  };
  return config;
};
