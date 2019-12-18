import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex);
Vue.use(ElementUI);

Vue.config.productionTip = false


import router from './routes/router'
import store from './store'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



router.beforeEach((to, from, next) => {
    NProgress.start();
    next()

});

router.afterEach(transition => {
  NProgress.done();
  window.console.log(transition);
});

