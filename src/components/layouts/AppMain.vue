<template>
        <div
            class="page"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.5)">
        <router-view  v-if="show" />
        </div>
</template>

<script>
    export default {
        name: "AppMain",
        data(){
            return{
               loading: false,
               show : true,
            }
        },
        
        //利用计算属性
        computed: {
            showpage() {
                let self = this;
                let status = this.$store.state.reloadpage.showrouter;
                this.$nextTick(() => {
                     self.show = status;
                });
                
                return status;
            }    
        },
        //监听执行
        watch:{
           showpage(val) {
                this.loading = !val;
            }
        },
            methods:{
                reloads(){
                    let self = this;
                    self.show = false;
                    this.$nextTick(() => {
                       setTimeout(function () {
                           self.$store.dispatch('changeShow', true);
                           self.show = true;
                       }, 500)
                    })
                }
            }
           
    }
</script>

<style scoped>
    .page{
        padding: 10px;
        box-sizing: border-box;
        width: 100%;height: 100%
    }    
</style>
