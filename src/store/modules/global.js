const state = {
  autoSave: false,
  syntaxHighlighting: true
};

const getters = {
  autoSave: state => state.autoSave,
  syntaxHighlighting: state => state.syntaxHighlighting,
};

const actions = {
  updateAutoSave({ commit }, value) {
    commit('updateAutoSave', { value });
  },

  updateSyntaxHighlighting({ commit }, value) {
    commit('updateSyntaxHighlighting', { value });
  }
};

const mutations = {
  updateAutoSave(state, { value }) {
    state.autoSave = value;
  },

  updateSyntaxHighlighting(state, { value }) {
    state.syntaxHighlighting = value;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
