<template>
    <div>
<!--        <el-row>-->
<!--           <el-col :span="5">-->
<!--                   <i class="el-icon-edit"></i>-->
<!--                   <i class="el-icon-share"></i>-->
<!--                   <i class="el-icon-delete"></i>-->
<!--                   <el-button type="primary" icon="el-icon-search">搜索</el-button>-->
<!--           </el-col>-->
<!--        </el-row>-->
        <jm-cart-row>
            <jm-cart :span="12">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

<!--            <jm-cart :span="6">-->
<!--                <div slot="card-header"> 这个地方是标题 </div>-->
<!--                <div slot="card-body"> 这个地方是内容 </div>-->
<!--            </jm-cart>-->

<!--            <jm-cart :span="6">-->
<!--                <div slot="card-header"> 这个地方是标题 </div>-->
<!--                <div slot="card-body"> 这个地方是内容 </div>-->
<!--            </jm-cart>-->

<!--            <jm-cart :span="6">-->
<!--                <div slot="card-header"> 这个地方是标题 </div>-->
<!--                <div slot="card-body"> 这个地方是内容 </div>-->
<!--            </jm-cart>-->
        </jm-cart-row>
    </div>
</template>

<script>
    import JmCart from '../../../components/jmui/JmCard'
    import JmCartRow from '../../../components/jmui/JmCardRow'

    export default {
        name: "Icon",
        components:{
            JmCartRow,
            JmCart,
        }
    }
</script>

<style scoped>
    .el-row .el-col{
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
</style>
