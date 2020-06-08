import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
Vue.use(Vuex); // essentially connects the two libraries together

export default new Vuex.Store({
  modules: {
    auth
  }
});