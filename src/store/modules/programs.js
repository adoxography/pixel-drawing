import programApi from '@/api/programs';

const state = {
  all: {
    items: []
  },

  current: {}
};

const getters = {
  allPrograms(state) {
    return state.all.items;
  },

  currentName(state) {
    return state.current.name;
  },

  currentSettings(state) {
    return state.current.settings;
  },

  currentProgram(state) {
    return state.current.program;
  }
};

const actions = {
  getAllPrograms({ commit }) {
    commit('getAllProgramsRequest');

    programApi.allKeys()
      .then(
        keys => commit('getAllProgramsSuccess', keys),
        error => commit('getAllProgramsFailure', error)
      );
  },

  saveProgram({ commit }, key, data) {
    commit('saveProgramRequest', key);

    programApi.saveProgram(key, data)
      .then(
        () => commit('saveProgramSuccess', key),
        error => commit('saveProgramFailure', error)
      );
  },

  loadProgram({ commit }, key) {
    commit('loadProgramRequest', key);

    programApi.getProgram(key)
      .then(
        program => commit('loadProgramSuccess', program),
        error => commit('loadProgramFailure', error)
      );
  },

  renameProgram({ commit }, from, to) {
    commit('renameProgramRequest', from, to);

    programApi.rename(from, to)
      .then(
        () => commit('renameProgramSuccess', from, to),
        error => commit('renameProgramFailure', error)
      );
  }
};

const mutations = {
  getAllProgramsRequest(state) {
    state.all = { retrieving: true };
  },

  getAllProgramsSuccess(state, keys) {
    state.all = { items: keys };
  },

  getAllProgramsFailure(state, error) {
    state.all = { error };
  },

  saveProgramRequest(state, key) {},

  saveProgramSuccess(state, key) {
    if (!state.all.items) {
      state.all.items = [];
    }

    state.all.items.push(key);
  },

  saveProgramFailure(state, error) {},

  loadProgramRequest(state, key) {
    state.current = { name: key };
  },

  loadProgramSuccess(state, program) {
    state.current.data = program;
  },

  loadProgramFailure(state, error) {
    state.current = { error };
  },

  renameProgramRequest(state, from, to) {},

  renameProgramSuccess(state, from, to) {
    if (!state.all.items) {
      state.all.items = [];
    }

    for (let i = 0; i < state.all.items.length; i++) {
      if (state.all.items[i] === from) {
        state.all.items[i] = to;
        break;
      }
    }
  },

  renameProgramFailure(state, error) {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
