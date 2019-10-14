import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import programs from './modules/programs';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'pixel-drawing',
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    programs
  },
  plugins: [ vuexPersist.plugin ],
  strict: debug
});
