<template>
    <div class="menu-box">
        <div class="admin-logo" ref="logo">
            Yuan Lu
        </div>
        <transition name="navanmi" class="navanmi" type="animation">

        <el-menu default-active="1-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="show"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-submenu  v-for="(first, find) in menuList" :key="find" :index="find.toString()">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{first.meta.title}}</span>
                </template>
                <el-menu-item-group>
                    <router-link v-for="(second, sind) in first.children" :key="sind" :to="second.path">
                        <el-menu-item :index="find.toString()+'-'+sind.toString()">{{second.meta.title}}</el-menu-item>
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
                this.menuList = this.$router['options']['routes'];
                window.console.log(this.menuList);

            },
            handleOpen() { // key, keyPath

            },
            handleClose() { // key, keyPath

            }
        }
    }
</script>
<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
    }
    .admin-logo{
        width: 100%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: white;
        border-bottom: 1px solid #495057;
    }
    .menu-box{
        float: left;
        height: 100%;
        width: 100%;
        background-color:#545c64;
    }
    .el-menu--collapse {
        height: 100%;
    }
    .navanmi { width: 230px; height: 100%;}
    .navanmi-enter { width: 230px;}
    .navanmi-enter-active { transition: all 0.8s; animation: aslide 0.8s;}
    .navanmi-enter-to { width: 64px;}
</style>
