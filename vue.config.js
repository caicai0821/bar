const { defineConfig } = require('@vue/cli-service')

const proxyObj = {}

proxyObj['/'] = {
  // websocket
  ws: false,
  target: 'http://localhost:8089',
  // 发送请求头host会被设置成target
  changeOrigin: true,

  // 不重写请求地址
  pathRewrite: {
    '^/': '/'
  }
}

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: proxyObj
  }
}
