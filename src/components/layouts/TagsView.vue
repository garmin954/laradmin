<template id="">
    <div class="tags-view-container">
        <div class="const-btn">
            <div class="close-all" @click="closeAllNav"><i class="el-icon-circle-close"></i></div>
            <router-link to="/admin">
                <div class="tags-view-item nav-index"><i class="el-icon-house"></i></div>
            </router-link>
        </div>
        <scroll-pane class="tags-view-wrap">

            <router-link v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path"  class="tags-view-item" :class="isActive(tag)?'active':''">
                {{tag.title}}
                <span class='el-icon-close' @click.prevent.stop="delSelectTag(tag)"></span>
            </router-link>

        </scroll-pane>

    </div>
</template>

<script>
    import ScrollPane from './ScrollPane'
    export default {
        name: "TagsView",
        components:{
            ScrollPane,
        },
        computed:{
            visitedViews(){//store中取值
                // window.console.log(this.$store.state.tagsview.visitedviews);
                return this.$store.state.tagsview.visitedviews
            }
        },
        watch:{
            $route(){
                this.addViewTags();
            }
        },
        methods:{
            isActive(route){
                return route.path == this.$route.path
            },
            addViewTags(){//路由改变时执行的方法
                if(this.$route.name){
                    const route = this.$route;
                    this.$store.dispatch('addVisitedViews', route);
                }
            },

            delSelectTag(route){//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
                this.$store.dispatch('delVisitedViews',route ).then((views)=>{
                    if(this.isActive(route)){//只有在关闭当前打开的标签页才会有影响
                        let lastView = views.slice(-1)[0]//选取路由数组中的最后一位
                        if(lastView){
                            this.$router.push(lastView);
                        }else{
                            this.$router.push('/');
                        }
                    }
                })
            },
            closeAllNav(){
                // this.$message('关闭所有');
                this.$store.dispatch('delAllVisitedViews', this.$router);
            }
        }
    }
</script>

<style scoped>
    .el-icon-circle-close{font-size: 1rem;color: #1C1D21;}
    .close-all,.nav-index{
        position: relative;
        left: 10px;
    }
    .close-all{
        display: block;
        float: left;
        cursor: pointer;
        line-height: 34px;
        margin-left: 12px
    }
    .const-btn{
        float: left;
        width: 100px;
        border-right: 1px solid #d8dce5;
    }
    .tags-view-wrap{
        float: left;
        width: calc(100% - 110px);
    }

    /*.close-all-box{*/
        /*width: 3rem;*/
        /*position: absolute;*/
        /*right: 0px;*/
        /*background: white;*/
    /*}*/
</style>
