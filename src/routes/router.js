import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import Index from '../components/pages/index/Index';
// import Tab from '../components/pages/index/Tab';

import AdminIndex from '../components/pages/admin/Index'
import AdminIcon from '../components/pages/admin/Icon'
import AppMain from '../components/layouts/AppMain'
export default new VueRouter({

    routes:[
        {
            path : '/',
            redirect: '/index',
            component: AppMain,
            meta: {title: '主页', icon:'el-icon-s-home'},
            children:[
                {
                    path : '/admin/admin-index',
                    meta: {title: '首页'},
                    name: 'index',
                    component : AdminIndex,
                },
                {
                    path : '/admin/icon',
                    meta: {title: '字体图标'},
                    name: 'icon',
                    component : AdminIcon,
                },
                // {
                //     path : '/admin/admin-index345',
                //     meta: {title: '首页1111345sss'},
                //     name: 'index',
                //     component : AdminIndex,
                // },
                // {
                //     path : '/admin/tab23432432',
                //     meta: {title: 'TAB222324234'},
                //     name: 'tab',
                //     component : AdminTab,
                // },
                // {
                //     path : '/admin/admin-index32432',
                //     meta: {title: '首页11112443sss'},
                //     name: 'index',
                //     component : AdminIndex,
                // },
                // {
                //     path : '/admin/tab34',
                //     meta: {title: 'TAB22234sss'},
                //     name: 'tab',
                //     component : AdminTab,
                // },
                // {
                //     path : '/admin/admin-index44',
                //     meta: {title: '首页111133sss'},
                //     name: 'index',
                //     component : AdminIndex,
                // },
                // {
                //     path : '/admin/tab22',
                //     meta: {title: 'TAB22212'},
                //     name: 'tab',
                //     component : AdminTab,
                // },
                // {
                //     path : '/admin/admin-index11',
                //     meta: {title: '首页111111'},
                //     name: 'index',
                //     component : AdminIndex,
                // },
                // {
                //     path : '/admin/tab1',
                //     meta: {title: 'TAB2221'},
                //     name: 'tab',
                //     component : AdminTab,
                // },
                // {
                //     path : '/admin/admin-index11s',
                //     meta: {title: '首页111111sss'},
                //     name: 'index',
                //     component : AdminIndex,
                // },
                // {
                //     path : '/admin/tab1sss',
                //     meta: {title: 'TAB2221ss'},
                //     name: 'tab',
                //     component : AdminTab,
                // },
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
