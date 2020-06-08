import api from '../../api/imgur';
import qs from 'qs';

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

  // NOTE: The first argument passed to actions is an object
  // with a bunch of helpers, such as "commit"

  login: () => {
    api.login(); // Redirect to api.imgur.com
  },
  finalizeLogin({ commit }, hash) {
    const queryString = qs.parse(hash.replace('#', ''));
    commit('setToken', queryString.access_token); // update state with access token
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