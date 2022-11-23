const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
<<<<<<< HEAD

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
  configureWebpack: {
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify"),
        "child_process": false,
        "fs": false,
        "net": false,
        "tls": false,
      }
    }
  },
}
=======
>>>>>>> parent of 82dd38a (leo vue)
