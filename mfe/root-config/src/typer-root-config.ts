import { registerApplication, start } from "single-spa";

const domElementGetter =
  (containerId = "") =>
  ({ name }) => {
    const container = document.getElementById(containerId);
    container.dataset.appName = name;
    return container;
  };

registerApplication({
  name: "@typer/home-page",
  app: () => System.import("@typer/home-page"),
  activeWhen: (location) => location.pathname === "/",
  customProps: {
    domElementGetter: domElementGetter("root"),
    errorBoundary: (err) => {
      console.log("dsdddsds", err);
    },
  },
});

registerApplication({
  name: "@typer/signin-page",
  app: () => System.import("@typer/signin-page"),
  activeWhen: "/signin",
  customProps: {
    domElementGetter: domElementGetter("root"),
    errorBoundary: (err) => {
      console.log("dsdddsds", err);
    },
  },
});

registerApplication({
  name: "@typer/signup-page",
  app: () => System.import("@typer/signup-page"),
  activeWhen: "/signup",
  customProps: {
    domElementGetter: domElementGetter("root"),
    errorBoundary: (err) => {
      console.log("dsdddsds", err);
    },
  },
});

registerApplication({
  name: "@typer/articles-page",
  app: () => System.import("@typer/articles-page"),
  activeWhen: "/articles",
  customProps: {
    domElementGetter: domElementGetter("root"),
    errorBoundary: (err) => {
      console.log("dsdddsds", err);
    },
  },
});

registerApplication({
  name: "@typer/article-editor-page",
  app: () => System.import("@typer/article-editor-page"),
  activeWhen: ["/articles/edit", "articles/new"],
  customProps: {
    domElementGetter: domElementGetter("root"),
    errorBoundary: (err) => {
      console.log("dsdddsds", err);
    },
  },
});

start();
