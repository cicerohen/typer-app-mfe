const { merge } = require("webpack-merge");
const path = require("path");
const defaults = require("@mfe/webpack-config");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  return merge(
    defaults({
      orgName: "mfe",
      projectName: "root-config",
      argv,
      webpackConfigEnv,
      generateHTML: false,
    }),
    {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "src/index.ejs",
          templateParameters: {
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          },
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(process.cwd(), "src"),
            },
          ],
        }),
      ],
    }
  );
};
