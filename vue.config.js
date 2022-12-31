const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:8080",
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/style.scss"',
      },
    },
  },
});
