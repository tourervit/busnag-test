const { BugsnagBuildReporterPlugin } = require("webpack-bugsnag-plugins");
const isDistEnv = true;

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    plugins: [].concat(
      // It's a good idea to only run this plugin when you're building a bundle
      // that will be released, rather than for every development build
      isDistEnv
        ? new BugsnagBuildReporterPlugin(
            {
              apiKey: "ceb06d2f1086242c28693908fe8f0241",
              appVersion: new Date().toISOString(),
            },
            {
              /* opts */
            }
          )
        : []
    ),
  },

}
