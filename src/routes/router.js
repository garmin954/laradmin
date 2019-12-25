import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import Index from '../components/pages/index/Index';
// import Tab from '../components/pages/index/Tab';

import AdminIndex from '../components/pages/admin/Index'
import AdminIcon from '../components/pages/admin/Icon'
import AppMain from '../components/layouts/AppMain'
import Cart from  '../components/pages/jmui/Cart'
import Login from  '../components/pages/jmui/Login'
import Edit from '../components/pages/jmui/Edit'
export default new VueRouter({

    routes:[
        {
            path : '/',
            name:'admin',
            redirect: '/admin/admin-index',
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
                    name: 'cart',
                    component : Cart,
                },
                {
                    path : '/admin/login',
                    redirect: '/login',
                    meta: {title: '登录'},
                    name: 'login',
                    component : Login,
                },
                {
                    path: '/admin/jmui/edit',
                    name: 'jm_editor',
                    meta: {title: '在线编辑器'},
                    component : Edit,
                }
            ]
        },
        {
            path : '/login',
            name : 'login',
            component: Login,
            meta: {title: 'login'},
            hidden:true,
        },
    ]
})
