const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports.plugins.push = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        inject: false
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './dist'),
        routes: ["/"]
      }),
      new VuetifyLoaderPlugin()
    ]
  }
};
