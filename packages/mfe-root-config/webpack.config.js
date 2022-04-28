/* global __dirname */

const { merge } = require("webpack-merge");
const path = require("path");
const defaults = require("@mfe/webpack-config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const production = argv.mode === "production";

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
        !production &&
          new CopyPlugin({
            patterns: [path.resolve(__dirname, "./src/importmap.json")],
          }),
      ].filter(Boolean),
    }
  );
};
