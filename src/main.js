'use strict';

import Vue from 'vue';

import { dom, library } from '@fortawesome/fontawesome-svg-core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';

window.__VERSION__ = '[AIV]{version}[/AIV]';

import App from './App';
import router from './routes';
import store from './store';

require('@/sass/main.scss');

// Set up fontawesome
library.add(
  faChevronRight,
  faCopy,
  faDownload,
  faFolderOpen,
  faFlag,
  faPlus,
  faSave,
  faUpload
);
dom.watch();

// Initialize Vue instance
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
