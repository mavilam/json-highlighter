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
  "transpileDependencies": [
    "vuetify"
  ]
}
