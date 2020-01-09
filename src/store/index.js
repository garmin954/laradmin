import Vue from 'vue';
import Vuex from 'vuex';
import tagsview from './modules/tagsview.js'
import reloadpage from './modules/reloadpage.js'
import getters from './getter.js'


Vue.use(Vuex);
// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})


const store= new Vuex.Store({
    state:{
        name:'YuanLu',
    },
    modules:{
        tagsview,
        reloadpage
    },
    getters
});

export default store
