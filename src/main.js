import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

import Vuex from 'vuex'
import 'es6-promise/auto'

import Axios from 'axios'

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Axios);

Vue.config.productionTip = true


import router from './routes/router'
import store from './store'
import Sass from './assets/css/variable.scss';


new Vue({
  render: h => h(App),
  router,
  store,
  Sass, 
}).$mount('#app');



router.beforeEach((to, from, next) => {
    NProgress.start();
    next()

});

router.afterEach(transition => {
  NProgress.done();
    transition;
  // window.console.log(transition);
});

