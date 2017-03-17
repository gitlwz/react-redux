var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname,"build");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin; //压缩文件
var CleanPlugin = require('clean-webpack-plugin');  //清空文件夹
var TransferWebpackPlugin = require('transfer-webpack-plugin');//复制

module.exports = {
  entry:  {app:path.resolve(__dirname,'app/main.js'),
          vendor: ["react","react-dom","react-router"]},//【1】注意这里//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/src/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'//添加对样式表的处理   注：感叹号的作用在于使同一文件能够使用不同类型的loader
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
  plugins: [
    new CleanPlugin('src/build/*'), 
    new uglifyJsPlugin({compress: {warnings: false }}),
    new webpack.NoErrorsPlugin(),
    // new TransferWebpackPlugin([
    //   {from: 'public'}
    // ], path.resolve(__dirname,"src")),
    new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",//和上面配置的入口对应
            filename: "vendor.js"//导出的文件的名称
        })  
  ]
}