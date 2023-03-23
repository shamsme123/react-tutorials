const path1 = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


console.log("The value of dirname ===>", __dirname); //__dirname


// dist

module.exports = {
  entry: './src', //entry: './src/index' start module bundling - if there is an index.js file exists, no need explicitly mention index in the path here
  mode: "development",
  output: { //where the webpack would do it's magic
    path: path1.resolve(__dirname, 'dist'), //create a filder in the __dirname (the current folder path)
    filename: 'index.bundle.js', // after bundling - file/artifact
  },
  devServer: {
    host: '0.0.0.0',
    port: 7860,
    writeToDisk: true,
    hot: true, //real time web pack build upon file save
    contentBase: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/, //reg-ex - /\.?js$/
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ //creates an html from a template and links the js bundle
      template: path1.join(__dirname, "template", "index.html"),
    }),
  ],
};