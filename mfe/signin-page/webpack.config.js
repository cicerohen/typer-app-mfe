const { merge } = require("webpack-merge");
const defaults = require("@typer/webpack-config-react");

module.exports = (webpackConfigEnv, argv) => {
  return merge(
    defaults({
      orgName: "typer",
      projectName: "signin-page",
      argv,
      webpackConfigEnv,
    }),
    {}
  );
};
