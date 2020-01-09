<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">
                Yuan Lu
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                Laravel
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                Vue
            </div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                Element UI
            </div>
            </el-col>
           
        </el-row>

        <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <!--<img :src="img" alt="">-->
                </div>
            </el-col>
             
        </el-row>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: "Index",
        data(){
            return {
                // img:'',
                api: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472',
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                Axios.get("http://p1.music.126.net/top/list?idx=6", {}).then(response=>{
                    // let res = response.data;
                    window.console.log(response);
                })
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
