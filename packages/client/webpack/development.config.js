const { resolve } = require('path');

const STATIC_PATH = resolve(
  __dirname,
  '..', // [client]
  'public'
);

module.exports = () => {
  return {
    mode: 'development',
    entry: resolve(__dirname, '..', 'sources/index.tsx'),
    output: {
      path: STATIC_PATH,
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@': resolve(__dirname, '..', 'sources'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
    plugins: [],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: STATIC_PATH,
      historyApiFallback: true,
      publicPath: '/dist',
    },
  };
};
