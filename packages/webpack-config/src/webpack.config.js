const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const SystemJSPublicPathPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({
  orgName,
  projectName,
  webpackConfigEnv,
  rootDirectoryLevel,
  argv,
}) => {
  return {
    mode: argv.mode || "development",
    entry: path.resolve(process.cwd(), `src/${orgName}-${projectName}`),
    output: {
      filename: `${orgName}-${projectName}.js`,
      path: path.resolve(process.cwd(), "dist"),
      uniqueName: `${projectName}`,
      devtoolNamespace: `${projectName}`,
      publicPath: "",
      library: {
        type: "system",
      },
    },
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      client: {
        webSocketURL: {
          hostname: "localhost",
        },
      },
      allowedHosts: "all",
    },
    externals: ["single-spa", "react", "react-dom"],
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".wasm", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("babel-loader"),
            },
          ],
        },
        {
          test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
          exclude: /node_modules/,
          type: "asset/resource",
        },
        {
          test: /\.html$/i,
          exclude: /node_modules/,
          type: "asset/source",
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: webpackConfigEnv.bundleAnalyzer ? "server" : "disabled",
      }),
      new SystemJSPublicPathPlugin({
        rootDirectoryLevel: rootDirectoryLevel,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(process.cwd(), "src"),
          },
        ],
      }),
      // new HtmlWebpackPlugin({
      //   inject: false,
      //   template: "src/index.ejs",
      //   templateParameters: {
      //     isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
      //   },
      // }),
    ],
  };
};
