<template>
    <div class="base-box">

        <el-container>
            <el-aside ref="leftnav" width="230px">
                <NavMenu :show="showNav" ></NavMenu>
            </el-aside>
            <el-container>
                <el-header>
                    <TopMenu @changenav="changeNav"></TopMenu>
                    <TagsView></TagsView>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>


    </div>
</template>

<script>

    import NavMenu from './NavMenu';
    import TopMenu from './TopMenu';
    import TagsView from './TagsView';

    export default {
        name: "Base",
        components:{
            NavMenu,
            TopMenu,
            TagsView
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
        padding: 0px 0px 0px 5px;
    }
    .base-box, .el-container, .el-aside{
        height: 100%;
    }

    .el-aside{transition: all 0.8s;}

    /*.navanim{width: 230px}*/
    /*.navanim-enter{width: 230px}*/
    /*.navanim-enter-active{transition: all 1s; animation: aslide 1s;}*/
    /*.navanim-enter{width: 64px}*/
</style>
