const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'client/index.js'),
  },
  
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/dummy',
    },
    historyApiFallback: true,    
    /* proxy: {
      '/signin': 'http://localhost:3000/',
    }, */
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};