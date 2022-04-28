const { merge } = require("webpack-merge");
const defaults = require("@mfe/webpack-config-react");

module.exports = (webpackConfigEnv, argv) => {
  return merge(
    defaults({
      orgName: "mfe",
      projectName: "auth",
      argv,
      webpackConfigEnv,
      standaloneOptions: {
        customProps: {
          intent: "SIGNIN",
        },
      },
    }),
    {}
  );
};
