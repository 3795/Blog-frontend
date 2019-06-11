module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.ntshare.cn:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/blog/v1'
        }
      }
    }
  },
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false
};
