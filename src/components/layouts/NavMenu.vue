<template>
    <div class="menu-box">
        <div class="admin-logo" ref="logo">
            Yuan Lu
        </div>
        <transition name="navanmi" class="navanmi" type="animation">

        <el-menu default-active=""
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="show"
                 background-color="#2d2f30"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-submenu  v-for="(first, find) in menuList" :key="find" :index="find.toString()">
                <template slot="title">
                    <i :class="first.meta.icon ? first.meta.icon : 'el-icon-setting'"></i>
                    <span slot="title">{{first.meta.title}}</span>
                </template>
                <el-menu-item-group>
                    <router-link v-for="(second, sind) in first.children" :key="sind" :to="second.path">
                        <el-menu-item :index="find.toString()+'-'+sind.toString()">{{second.meta.title}}</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu  index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">首页s</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/tab">
                        <el-menu-item index="5-1">Tab</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
    </el-menu>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        props: ['show'],
        data() {
            return {
                // isCollapse: false
                menuList: []
            };
        },
        created(){
            this.reviewRoute();
        },
        watch:{

        },
        mounted () {
            let logo_el = this.$refs['logo'];
            logo_el.addEventListener('resize', () => {

                if (logo_el.style.width < 100) {
                   // window.console.log(logo_el.style.width )
                } else {
                    // window.console.log(logo_el.style.width )
                }
            })
        },
        methods: {
            reviewRoute() {
                //hidden
                let self = this;
                this.menuList = this.$router['options']['routes'];
                this.menuList.forEach( (url, index) => {
                    if (url.hidden !== undefined && url.hidden === true){
                        self.menuList.splice(index, 1);      
                    } 
                })
            },
            handleOpen() { // key, keyPath

            },
            handleClose() { // key, keyPath

            }
        }
    }
</script>
<style lang="scss" scoped type="text/css">
    @import "~@/assets/css/variable.scss";

    .is-active,.router-link-active{
        background-color: $active-nav!important;
    }
    .el-menu-item-group li:hover{
        background-color: $active-nav!important;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        margin-left: 10px;
    }
    .admin-logo{
        width: 100%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: white;
        border-bottom: 1px solid $color;
    }
    .menu-box{
        float: left;
        width: 100%;
        background-color: $color;
        overflow: hidden;
        height: 100%;
    }
    .el-menu--collapse {
        height: 100%;
    }
    .navanmi { width: 230px; height: 100%;}
    .navanmi-enter { width: 230px;}
    .navanmi-enter-active { transition: all 0.8s; animation: aslide 0.8s;}
    .navanmi-enter-to { width: 64px;}
</style>
