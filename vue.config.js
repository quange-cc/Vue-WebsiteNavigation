const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  configureWebpack:{
    plugins: [new CompressionPlugin()],
  }
};




