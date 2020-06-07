const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  // commit is a function that is used to call the mutations
  // example: mutations.setToken() is bad
  // Use: commit('mutation', argument)
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};