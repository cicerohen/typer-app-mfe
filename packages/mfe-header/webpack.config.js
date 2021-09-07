const { merge } = require("webpack-merge");
const defaults = require("@mfe/webpack-config-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  return merge(
    defaults({
      orgName: "mfe",
      projectName: "header",
      argv,
      webpackConfigEnv,
    }),
    {}
  );
};
