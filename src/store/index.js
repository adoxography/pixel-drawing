import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist/dist/umd';
import programs from './modules/programs';
import global from './modules/global';

const debug = process.env.NODE_ENV !== 'production';
const storageKey = 'pixel-drawing';

// Make sure the storage is as it's expected to be; if it isn't, remove
// whatever is there.
const data = JSON.parse(localStorage.getItem(storageKey));
if (data && !{}.hasOwnProperty.call(data, 'programs')) {
  localStorage.removeItem(storageKey);
}

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: storageKey,
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    global,
    programs
  },
  plugins: [ vuexPersist.plugin ],
  strict: debug
});
