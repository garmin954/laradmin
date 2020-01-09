<template>
    <div class="top-menu-box">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item>
            <i class="el-icon-s-unfold" ref="cns" @click="changenav"></i>
        </el-menu-item>
        <el-menu-item>
            <router-link to="/">
                <i class="el-icon-s-platform"></i>
            </router-link>
        </el-menu-item>
        <el-menu-item>
            <router-link :to="crouter" @click.native="refresh">
                <i class="el-icon-refresh" ></i>
            </router-link>
            <!--.native-->
            
        </el-menu-item>

<!--        <el-submenu index="2">-->
<!--            <template slot="title">我的工作台</template>-->
<!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        </el-submenu>-->

        <el-submenu index="3">
            <template slot="title">
                <el-avatar size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                我的工
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>

        <el-menu-item index="1">
            <router-link to="/">
                <i class="el-icon-message-solid"></i>
            </router-link>
        </el-menu-item>

    </el-menu>
 
    </div>


</template>

<script>
    export default {
        name: "TopMenu",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                showNav: false,
                crouter : '',
            };
        },
        computed:{
            currentRouter(){
                return this.$router.app._route.fullPath;
            }
        },
        watch:{
            currentRouter(val){
                this.crouter = val;
            }
        },
        methods: {
            changenav(){
                let cns = this.$refs['cns'];
                if (this.showNav == true){
                    cns.classList.replace('el-icon-s-fold', 'el-icon-s-unfold')
                }else{
                    cns.classList.replace('el-icon-s-unfold', 'el-icon-s-fold')
                }
                this.showNav = !this.showNav;
                this.$emit('changenav', this.showNav); // 设置事件
            },
            handleSelect() { // key, keyPath

            },
            refresh(){
                // this.$router.go(0);
                this.$store.dispatch('changeShow', false);
                this.$parent.$parent.$parent.$parent.reloads();
               
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top-menu-box{
        display: inline-block;
        width: 100%;
    }
    
    // @bgcolorlist储存背景颜色
    $bgcolorlist: 20;

    // 使用SASS for循环语句为每一个li设置background-color
    @for $i from 1 to $bgcolorlist+1 {
        .top-menu-box ul li:nth-child(#{$i}) {
            @if($i > 3){
                float: right;
            } else {
                float: left;             
            }
        }
    }
    .top-menu-box ul li:nth-child(4){
        margin-right: 2rem;
    }
    .el-menu-item{float: left}
    /deep/.el-submenu__icon-arrow{display: contents}
    /deep/.el-menu--horizontal>.el-submenu .el-submenu__title{height: 45px;line-height: 45px}
    .right-menu{float: right; margin-right: 3rem;width: auto}
    .el-header,.el-menu--horizontal>.el-menu-item{height: 45px;line-height: 45px}
</style>
