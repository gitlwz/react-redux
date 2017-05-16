var webpack = require('webpack');
var path = require('path');
var nodemodulesPath = path.resolve(__dirname,'node_modules');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项(用来方便调试代码的)
  entry: [ 
     'webpack/hot/dev-server',//注意点1：热替换配置点1
      "./app/routes/index.js"
  ],//已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname),//打包后的文件存放的地方
    filename: "public/bundle.js",//打包后输出文件的文件名
    publicPath: '/'
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
  devServer: {
    contentBase:path.join(__dirname),//本地服务器所加载的页面所在的目录
    // colors: true,//终端中输出结果为彩色
    // historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot:true,
    devtool:'eval-source-map'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//开启热替换插件
    new webpack.NoErrorsPlugin()
  ]
}