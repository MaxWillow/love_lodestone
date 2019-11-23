const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');
const path = require('path');
const fs = require('fs')

function generateHtmlPlugins(templateDir, isProduction) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    console.log(`${templateDir}/${name}.${extension}`);

    const minify = {
      collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
    }
    const htmlWebpackPluginSettings = {
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      // inject: false,
    }

    if(isProduction) htmlWebpackPluginSettings.minify = minify

    return new HtmlWebpackPlugin(htmlWebpackPluginSettings)
  })
}

const htmlPlugins = generateHtmlPlugins(`${paths.SRC_DIR}/html/views`);

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [...htmlPlugins],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
