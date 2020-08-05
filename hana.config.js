var AutoPrefixer = require('autoprefixer')
module.exports = {

  postcss: {
    autoprefixer: AutoPrefixer({
      browsers: ['last 2 versions']
    })
  }

}