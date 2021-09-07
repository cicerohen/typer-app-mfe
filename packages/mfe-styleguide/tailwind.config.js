module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../mfe-root-config/src/index.ejs",
    "../mfe-header/src/**/*.{ts,tsx}",
    "../mfe-footer/src/**/*.{ts,tsx}",
    "../mfe-home/src/**/*.{ts,tsx}",
    "../mfe-auth/src/**/*.{ts,tsx}",
    "../mfe-sidebar/src/**/*.{ts,tsx}",
    "../mfe-editor/src/**/*.{ts,tsx}",
    "../mfe-dashboard/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
