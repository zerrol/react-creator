
const path = require('path')

const SRC = path.resolve(__dirname, './src')

module.exports = {

  // 通过 webpack define plugin 定义全局变量
  // define: {
  //   'process.env': {
  //     HTTP_ENV: 'release7'
  //   }
  // },
  // devtoolProd: 'cheap-module-eval-source-map',

  alias: {
    "@routes": path.join(SRC, 'routes')
  },

  postcss: {
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions"],
    },
  },

  // theme: {
  //   "primary-color": "#57d4ce",
  //   "border-radius": "4px",
  // }

  lessLoader: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "primary-color": "#57d4ce",
        "border-radius": "4px",
      },
    },
  },
}
