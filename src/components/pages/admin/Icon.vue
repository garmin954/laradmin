<template>
    <div>
        <el-row>
           <el-col :span="5">
                   <i class="el-icon-edit"></i>
                   <i class="el-icon-share"></i>
                   <i class="el-icon-delete"></i>
                   <el-button type="primary" icon="el-icon-search">搜索</el-button>
           </el-col>
        </el-row>
        
        <jm-cart></jm-cart>
    </div>
</template>

<script>
    import JmCart from ''
    export default {
        name: "Icon",
        components:[
            JmCart,
        ]
    }
</script>

<style scoped>
    .el-row .el-col{
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
</style>
