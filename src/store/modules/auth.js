import api from '../../api/imgur';

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
  login: () => {
    api.login(); // Redirect to api.imgur.com
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}