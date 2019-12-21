<template>
    <div>
        <jm-cart-row>
            <jm-cart :span="12">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="6">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="6">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

        </jm-cart-row>

        <jm-cart-row>
            <jm-cart :span="6">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="9">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="9">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

        </jm-cart-row>

        <jm-cart-row>
            <jm-cart :span="4">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="4">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="4">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>

            <jm-cart :span="12">
                <div slot="card-header"> 这个地方是标题 </div>
                <div slot="card-body"> 这个地方是内容 </div>
            </jm-cart>
        </jm-cart-row>
    </div>
</template>

<script>
    import JmCartRow from '../../jmui/JmCardRow';
    import JmCart from '../../jmui/JmCard';
    export default {
        name: "Cart",
        components:{
            JmCart,
            JmCartRow,
        }
    }
</script>

<style scoped>

</style>
