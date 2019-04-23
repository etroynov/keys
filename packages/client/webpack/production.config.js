const { resolve } = require('path');

const STATIC_PATH = resolve(
  __dirname,
  '..', // [client]
  'public'
);

// TODO Production config
module.exports = () => {
  return {
    mode: 'production',
    entry: resolve(__dirname, '..', 'sources/index.tsx'),
    output: {
      path: STATIC_PATH,
      publicPath: '/',
      filename: '[name].[hash:8].js',
      chunkFilename: '[name].[hash:8].js',
    },
    module: {},
    plugins: [],
    devtool: 'source-map',
  };
};
