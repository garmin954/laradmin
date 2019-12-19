<template>
    <div class="base-box">

        <el-container>
            <el-aside ref="leftnav" width="230px">
                <nav-menu :show="showNav" ></nav-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <top-menu @changenav="changeNav"></top-menu>
                    <tags-view></tags-view>
                </el-header>
                <el-main>
                    <app-main></app-main>
                </el-main>
            </el-container>
        </el-container>


    </div>
</template>

<script>

    import NavMenu from './NavMenu';
    import TopMenu from './TopMenu';
    import TagsView from './TagsView';
    import AppMain from './AppMain';
    export default {
        name: "Base",
        components:{
            NavMenu,
            TopMenu,
            TagsView,
            AppMain
        },
        data() {
            return {
                showNav : false,
            }
        },
        computed:{

        },
        methods: {
            changeNav(status){
                this.showNav = status;
                let left_nav = this.$refs['leftnav'].$el;
                // window.console.log(left_nav);

                if (status == true){
                    left_nav.style= 'width:64px;'
                }else{
                    left_nav.style= 'width:230px'
                }
            },

        }
    }
</script>

<style scoped>
    .el-header{
        height: 80px!important;
        box-sizing: content-box;
        padding: 0px 0px 0px 0px;
        background: #ffffff;
    }
    .base-box, .el-container, .el-aside{
        height: 100%;
    }

    .el-main{
        padding: 20px 30px 20px 20px;
    }
    .el-aside{transition: all 0.8s;}

    /*.navanim{width: 230px}*/
    /*.navanim-enter{width: 230px}*/
    /*.navanim-enter-active{transition: all 1s; animation: aslide 1s;}*/
    /*.navanim-enter{width: 64px}*/
</style>
