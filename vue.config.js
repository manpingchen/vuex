const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  test: /\.scss$/,
  use: ["vue-style-loader", "css-loader", "sass-loader"],
});
