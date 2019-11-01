import defaults from '@/defaults';

const state = {
  all: []
};

const getters = {
  allPrograms: state => state.all,
  maxId: state => state.all.reduce((m, v) => Math.max(m, v.id), 0),
  lastProgram: state => state.all.reduce(
    (m, v) => m.updated > v.updated ? m : v, defaults.program
  )
};

const actions = {
  saveProgram({ commit }, data) {
    commit('saveProgram', { data });
  },

  tapProgram({ commit }, id) {
    commit('tapProgram', { id });
  }
};

const mutations = {
  saveProgram(state, { data }) {
    data = { ...data, updated: Date.now() };
    const prevIdx = state.all.findIndex(program => program.id === data.id);

    if (prevIdx < 0) {
      state.all.push(data);
    } else {
      state.all[prevIdx] = data;
    }
  },

  tapProgram(state, { id }) {
    state.all.find(program => program.id === id).updated = Date.now();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
