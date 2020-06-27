const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'});
}

module.exports = (env) =>{
  const isProduction = env === 'production';
  return {
    entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_apiKey': JSON.stringify(process.env.FIREBASE_apiKey),
      'process.env.FIREBASE_authDomain': JSON.stringify(process.env.FIREBASE_authDomain),
      'process.env.FIREBASE_databaseURL': JSON.stringify(process.env.databaseURL),
      'process.env.FIREBASE_projectId': JSON.stringify(process.env.FIREBASE_projectId),
      'process.env.FIREBASE_storageBucket': JSON.stringify(process.env.FIREBASE_storageBucket),
      'process.env.FIREBASE_messagingSenderId': JSON.stringify(process.env.FIREBASE_messagingSenderId),
      'process.env.FIREBASE_measurementId': JSON.stringify(process.env.FIREBASE_measurementId),
      'process.env.FIREBASE_appId': JSON.stringify(process.env.FIREBASE_appId)
    })
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
        }]
    }]
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/dist/'
  }
  }
};
