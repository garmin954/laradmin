import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import Index from '../components/pages/index/Index';
// import Tab from '../components/pages/index/Tab';

import AdminIndex from '../components/pages/admin/Index'
import AdminTab from '../components/pages/admin/Tab'
import AppMain from '../components/layouts/AppMain'
export default new VueRouter({

    routes:[
        {
            path : '/',
            redirect: '/index',
            component: AppMain,
            meta: {title: '后台'},
            children:[
                {
                    path : '/admin/admin-index',
                    meta: {title: '首页1111'},
                    name: 'index',
                    component : AdminIndex,
                },
                {
                    path : '/admin/tab',
                    meta: {title: 'TAB222'},
                    name: 'tab',
                    component : AdminTab,
                },
            ]
        },
        {
            path : '/admin',
            meta: {title: '后台首页'},
            name: 'admin',
            component : AdminIndex,
        },
    ]
})
