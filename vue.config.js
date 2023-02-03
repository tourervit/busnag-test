const { BugsnagBuildReporterPlugin } = require("webpack-bugsnag-plugins");
const isProd = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [].concat(
      // It's a good idea to only run this plugin when you're building a bundle
      // that will be released, rather than for every development build
      isProd
        ? new BugsnagBuildReporterPlugin(
            {
              autoAssignRelease:true,
              apiKey: "ceb06d2f1086242c28693908fe8f0241",
              releaseStage: 'production'
            },
            {
              /* opts */
            }
          )
        : []
    ),
  },

}
