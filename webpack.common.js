require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
   resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
   },
   entry: `${path.join(__dirname, '/client/src')}/index.tsx`,
   output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'The MacroTrainer',
         template: 'template.html',
         favicon: './favicon_io/favicon.ico',
      }),
      new MiniCssExtractPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      //! uncomment this line to visualize webpack bundles in browser
      // new BundleAnalyzerPlugin(),
   ],
};
