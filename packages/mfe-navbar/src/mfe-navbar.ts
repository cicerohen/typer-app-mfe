import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import AppContainer from './containers/AppContainer';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AppContainer,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;