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
    </div>
</template>

<script>
    export default {
        name: "Index"
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
