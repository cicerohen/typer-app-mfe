import { registerApplication, start } from "single-spa";

const domElementGetter =
  (containerId = "") =>
  ({ name }) => {
    const container = document.getElementById(containerId);
    container.dataset.appName = name;
    return container;
  };

registerApplication({
  name: "@typer/header",
  app: () => System.import("@typer/header"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("header"),
  }),
});

registerApplication({
  name: "@typer/sidebar",
  app: () => System.import("@typer/sidebar"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("sidebar"),
  }),
});

registerApplication({
  name: "@typer/footer",
  app: () => System.import("@typer/footer"),
  activeWhen: "/",
  customProps: () => ({
    domElementGetter: domElementGetter("footer"),
  }),
});

registerApplication({
  name: "@typer/home",
  app: () => System.import("@typer/home"),
  activeWhen: (location) => location.pathname === "/",
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

registerApplication({
  name: "@typer/signin",
  app: () => System.import("@typer/auth"),
  activeWhen: ["/signin"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
    intent: "SIGNIN",
  }),
});

registerApplication({
  name: "@typer/signup",
  app: () => System.import("@typer/auth"),
  activeWhen: ["/signup"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
    intent: "SIGNUP",
  }),
});

registerApplication({
  name: "@typer/dashboard",
  app: () => System.import("@typer/dashboard"),
  activeWhen: ["/dashboard", "/me"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

registerApplication({
  name: "@typer/editor",
  app: () => System.import("@typer/editor"),
  activeWhen: ["/articles/new", "/articles/:id/edit"],
  customProps: () => ({
    domElementGetter: domElementGetter("main"),
  }),
});

start();
