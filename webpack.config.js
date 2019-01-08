const path = require('path')

const root = path.resolve(__dirname, '')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(root, 'lib'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ path.join(root, 'src') ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  }
}
