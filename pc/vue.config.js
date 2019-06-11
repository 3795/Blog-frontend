const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
  lintOnSave: false,
  // configureWebpack: {
  //   plugins: [
  //     new PrerenderSPAPlugin({
  //       staticDir: path.join(__dirname,'dist'),
  //       routes: ['/'],
  //       renderer: new Renderer({
  //         inject: {
  //           foo: 'bar'
  //         },
  //         headless: false,
  //         renderAfterDocumentEvent: 'render-event',
  //         //renderAfterTime: 5000,
  //         //renderAfterElementExists: 'my-app-element'
  //       }),
  //     })
  //   ]
  // }
};
