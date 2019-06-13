module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.ntshare.cn',
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
  lintOnSave: false,
};
