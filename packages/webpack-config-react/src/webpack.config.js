const defaults = require("@mfe/webpack-config");

module.exports = (options) => {
  const config = defaults(options);
  config.externals.push("react", "react-dom");

  return config;
};
