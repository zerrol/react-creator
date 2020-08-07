module.exports = {
  // 通过 webpack define plugin 定义全局变量
  // define: {
  //   'process.env': {
  //     HTTP_ENV: 'release7'
  //   }
  // },
  // devtoolProd: 'cheap-module-eval-source-map',

  postcss: {
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions"],
    },
  },

  lessLoader: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "primary-color": "red",
        "border-radius": "4px",
      },
    },
  },
}
