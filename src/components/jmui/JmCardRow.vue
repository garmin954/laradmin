<template>
    <el-row ref="card">
        <slot/>
    </el-row>
</template>

<script>
    export default {
        name: "JmCardRow",
        mounted() {
            this.cartboxs()
        },
        updated(){
            this.cartboxs()
        },
        methods:{
            cartboxs(){
                let cardbox = this.$refs.card;
                let len = cardbox.$children.length;
                let space = 5;
                if (len > 1){
                    cardbox.$children.forEach(el => {
                        let width = el.$el.offsetWidth - space +'px';
                        el.$el.style.width = width;
                    })
                } else {
                    cardbox.$el.setAttribute('style', 'justify-content: left!important');
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .el-row{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
</style>
