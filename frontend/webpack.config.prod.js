const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    // hot: true,
    https: false,
    port: 8081,
    disableHostCheck: true
  },
  entry: './src/index.tsx',
  externals: {
    'chart.js': 'Chart',
    lodash: '_',
    'mapbox-gl': 'mapboxgl',
    moment: 'moment',
    react: 'React',
    'react-dom': 'ReactDOM',
    rx: 'Rx'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: loader => [
              require('postcss-import')(),
              require('postcss-cssnext')({
                browsers: '>2%'
              })
            ]
          }
        }]
      })
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.prod.ejs',
      title: 'bayes-network-adequacy-explorer',
      favicon: path.join(__dirname, 'src/images/favicon.png')
    }),
    new webpack.DefinePlugin({
      'process.env.API_ROOT': JSON.stringify(process.env.API_ROOT),
      'process.env.MAPBOX_TOKEN': JSON.stringify(process.env.MAPBOX_TOKEN),
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true
    })
  ]
}
