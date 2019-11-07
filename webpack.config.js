const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');  

module.exports = {
  entry: path.join(__dirname,'./src/index.js'),
  output: { 
    path: path.join(__dirname, './dist'), 
    filename: 'bundle.js' 
  },
  mode: 'development' ,
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index123.html'
    }),
    new VueLoaderPlugin(),
  ],
  module:{
    rules:[
      { test: /\.css$/, use:['style-loader', 'css-loader']},
      { test:/\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
      { test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},
      { test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader'},
      { test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      { test:/\.js$/, use: 'babel-loader',exclude: /node_modules/},
      { test:/\.vue$/, use: 'vue-loader'},
    ]
  }
};