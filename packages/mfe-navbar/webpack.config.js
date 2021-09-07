const { merge } = require("webpack-merge");
const defaults = require("@mfe/webpack-config");

module.exports = (webpackConfigEnv, argv) => {
  return merge(
    defaults({
      orgName: "mfe",
      projectName: "navbar",
      argv,
      webpackConfigEnv,
    }),
    {}
  );
};

