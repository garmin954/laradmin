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

            <i class="el-icon-refresh" @click="refresh"></i>
        </el-menu-item>

<!--        <el-submenu index="2">-->
<!--            <template slot="title">我的工作台</template>-->
<!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        </el-submenu>-->
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
            };
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
                this.$router.go(0);
            }
        }
    }
</script>

<style scoped>
    .top-menu-box{
        display: inline-block;
        width: 100%;
    }
    .el-header,.el-menu--horizontal>.el-menu-item{height: 45px;line-height: 45px}
</style>
