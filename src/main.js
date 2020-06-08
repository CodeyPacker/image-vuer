import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter);

// Tell it about the different routes in the app
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oath2/callback', component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
