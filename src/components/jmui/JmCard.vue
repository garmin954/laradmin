<template>
        <el-col :span="span">
            <div class="jm-cart-header">
                <slot name="card-header"></slot>
            </div>

            <div class="jm-cart-body">
                <slot name="card-body"></slot>
            </div>
        </el-col>
</template>

<script>
    export default {
        name: "JmCard",
        props:['span'],

    }
</script>

<style scoped>
    .el-row .el-col{
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
    .jm-cart-header{
        width: 100%;
        position: relative;
        height: 42px;
        line-height: 42px;
        padding: 0 15px;
        border-bottom: 1px solid #f6f6f6;
        color: #333;
        border-radius: 2px 2px 0 0;
        font-size: 14px;
    }
    .jm-cart-body{
        position: relative;
        padding: 10px 15px;
        line-height: 24px;
    }
</style>
