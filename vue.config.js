module.exports = {
  "outputDir": "dist",
  "assetsDir": "static",
  "publicPath": "/",
  "devServer": {
    "proxy": {
      "/tasks": {
        "target": "http://localhost:8000/"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}