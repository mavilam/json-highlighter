module.exports = {
  "outputDir": "dist",
  "assetsDir": "static",
  "devServer": {
    "proxy": {
      "/tasks": {
        "target": "http://localhost:8000/"
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/json-highlighter/'
    : '/'
  ,
  "transpileDependencies": [
    "vuetify"
  ]
}
