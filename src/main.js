'use strict';

import Vue from 'vue';

import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

window.__VERSION__ = '[AIV]{version}[/AIV]';

import App from './App';
import router from './routes';
import store from './store';

require('@/sass/main.scss');

// Set up fontawesome
library.add(fas, fab);
dom.watch();

// Initialize Vue instance
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
