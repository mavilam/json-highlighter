module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/json-highlighter/'
    : '/',
  devServer: {
    proxy: {
      '/tasks': {
        target: 'http://localhost:8000/',
      },
    },
  },
}
