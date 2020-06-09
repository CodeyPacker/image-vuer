import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
Vue.use(Vuex) // essentially connects the two libraries together

// Adding the auth module allows me to use it's data in other modules
// (using in images.js to get the token)
export default new Vuex.Store({
  modules: {
    auth
  }
})