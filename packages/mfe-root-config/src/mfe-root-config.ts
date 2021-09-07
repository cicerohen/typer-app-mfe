import { registerApplication, start } from "single-spa";

const domElementGetter =
  (containerId = "") =>
  ({ name }) => {
    const container = document.getElementById(containerId);
    container.dataset.appName = name;
    return container;
  };

registerApplication({
  name: "@mfe/header",
  app: () => System.import("@mfe/header"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("header"),
  }),
});

registerApplication({
  name: "@mfe/sidebar",
  app: () => System.import("@mfe/sidebar"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("sidebar"),
  }),
});

registerApplication({
  name: "@mfe/footer",
  app: () => System.import("@mfe/footer"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("footer"),
  }),
});

registerApplication({
  name: "@mfe/home",
  app: () => System.import("@mfe/home"),
  activeWhen: (location) => location.pathname === "/",
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

registerApplication({
  name: "@mfe/signin",
  app: () => System.import("@mfe/auth"),
  activeWhen: ["/signin"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
    intent: "SIGNIN",
  }),
});

registerApplication({
  name: "@mfe/signup",
  app: () => System.import("@mfe/auth"),
  activeWhen: ["/signup"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
    intent: "SIGNUP",
  }),
});

registerApplication({
  name: "@mfe/dashboard",
  app: () => System.import("@mfe/dashboard"),
  activeWhen: ["/dashboard", "/me"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

registerApplication({
  name: "@mfe/editor",
  app: () => System.import("@mfe/editor"),
  activeWhen: ["/articles/new", "/articles/:id/edit"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

start();
