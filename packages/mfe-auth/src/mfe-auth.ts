import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import "@mfe/styleguide";

import { App } from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const { bootstrap, mount, unmount } = lifecycles;
