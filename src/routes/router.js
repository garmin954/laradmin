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
            ]
        },
        {
            path : '/',
            component: AppMain,
            meta: {title: 'JMUI', icon:'el-icon-s-home'},
            children:[
                {
                    path : '/admin/cart',
                    meta: {title: 'Cart'},
                    name: 'icon',
                    component : AdminIcon,
                },
            ]
        },
    ]
})
