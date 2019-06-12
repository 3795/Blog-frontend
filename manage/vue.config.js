module.exports = {
  publicPath: '/',
  devServer: {
    port: 8001,
    host: 'dev.ntshare.cn',
    proxy: {
      '/api': {
        target: 'https://api.ntshare.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/blog/v1'
        },
      }
    }
  },
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false
};
