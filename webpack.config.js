const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, './src/'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 3000,
    hot: true,
    stats: {
      colors: true,
    },
  },
  entry: ['./src/index.js', './src/dev.js'],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', 'less', 'css'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), { modules: false }],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader',
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: path.resolve(__dirname, './src/styles/index.less')
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, './src/svgs'),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
