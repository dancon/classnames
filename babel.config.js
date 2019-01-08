const presets = [
  ['@babel/preset-env', {
    useBuiltIns: 'usage',
    modules: false
  }]
]

const plugins = [
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-json-strings'
]

module.exports = {
  sourceType: 'module',
  presets,
  plugins,
  env: {
    test: {
      presets: [
        '@babel/preset-env'
      ]
    }
  }
}
