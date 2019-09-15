'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);
dom.watch();

require('@/sass/main.scss');

import App from './App';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  // mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
