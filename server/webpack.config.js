/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(txt|ged)$/i,
        exclude: /node_modules/,
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [new NodemonPlugin()],
};
