import Vue from 'vue';
import Vuex from 'vuex';
import programs from './modules/programs';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    programs
  },
  strict: debug
});
