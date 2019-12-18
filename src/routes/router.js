import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from '../components/pages/index/Index';
import Tab from '../components/pages/index/Tab';
export default new VueRouter({

    routes:[
        {
            path : '/index',
            title: '首页',
            name: 'index',
            component : Index
        },
        {
            path : '/tab',
            title: 'tab',
            name: 'tab',
            component : Tab
        }
    ]
})
