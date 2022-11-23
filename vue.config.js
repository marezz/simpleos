const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  }
})

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "SimpleOS",
        appId: 'simpleos.com',
        win: {
          "target": [
            "nsis"
          ],
          icon: 'public/favicon.ico',
        },
        "nsis": {
          "installerIcon": "public/favicon.ico",
          "uninstallerIcon": "public/favicon.ico",
          "uninstallDisplayName": "CPU Monitor",
          "oneClick": false,
          "allowToChangeInstallationDirectory": true
        }
      },
    },
  },
}