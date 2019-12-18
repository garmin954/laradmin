import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from '../components/pages/index/Index';
import Tab from '../components/pages/index/Tab';

import AdminIndex from '../components/pages/admin/Index'
import AdminTab from '../components/pages/admin/Tab'

export default new VueRouter({

    routes:[
        {
            path : '/admin/',
            name: 'admin',
            meta: {title: '后台'},
            children:[
                {
                    path : '/admin/index',
                    meta: {title: '首页'},
                    name: 'adminindex',
                    component : AdminIndex,
                },
                {
                    path : '/admin/tab',
                    meta: {title: 'TAB'},
                    name: 'admintab',
                    component : AdminTab,
                },
            ]
        },
        {
            path : '/index',
            name: 'index',
            meta: {title: '后台'},
            children:[
                {
                    path : '/index',
                    meta: {title: '首页s'},
                    name: 'adminindexs',
                    component : Index,
                },
                {
                    path : '/tab',
                    meta: {title: 'TABs'},
                    name: 'admintabs',
                    component : Tab,
                },
            ]
        },
        {
            path : '/tab',
            name: 'tab',
            meta: {title: '后台'},
            children:[
                {
                    path : '/admin/index',
                    meta: {title: '首页'},
                    name: 'adminindexss',
                    component : AdminIndex,
                },
                {
                    path : '/admin/tab',
                    meta: {title: 'TAB'},
                    name: 'admintabss',
                    component : AdminTab,
                },
            ]
        }
    ]
})
