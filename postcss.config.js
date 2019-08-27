var AutoPrefixer = require('autoprefixer')
module.exports = {
  plugins: [
    AutoPrefixer({
      browsers: ['last 2 versions']
    })
  ]
}