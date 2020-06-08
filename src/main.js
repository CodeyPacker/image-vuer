import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

// Tell it about the different routes in the app
// mode: 'history' switches from hash to browser router
export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oath2/callback', component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
