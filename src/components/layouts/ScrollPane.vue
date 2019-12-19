<template>
    <div>
    <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot/>
            </div>
            <div class="switch-button switch-button-left el-icon-d-arrow-left"></div>
            <div class="switch-button switch-button-right el-icon-d-arrow-right"></div>
        </div>
    </el-scrollbar>
    </div>
</template>

<script>
    import Swiper from  'swiper'
    import 'swiper/css/swiper.min.css'
    const tagAndTagSpacing = 4; // tagAndTagSpacing

    export default {
        name: 'ScrollPane',
        data() {
            return {
                left: 0,
            };
        },
        mounted(){
            this.$nextTick(function(){
                new Swiper(".swiper-container",{
                    direction:"horizontal",/*横向滑动*/
                    // loop:true,//形成环路（即：可以从最后一张图跳转到第一张图
                    pagination:".swiper-pagination",/*分页器*/
                    autoplay:1000,/*每隔3秒自动播放*/
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            })
        },
        computed: {
            scrollWrapper() {
                return this.$refs.scrollContainer.$refs.wrap;
            },
        },
        methods: {
            handleScroll(e) {
                const eventDelta = e.wheelDelta || -e.deltaY * 40;
                const $scrollWrapper = this.scrollWrapper;
                $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
            },
            moveToTarget(currentTag) {
                const $container = this.$refs.scrollContainer.$el;
                const $containerWidth = $container.offsetWidth;
                const $scrollWrapper = this.scrollWrapper;
                const tagList = this.$parent.$refs.tag;

                let firstTag = null;
                let lastTag = null;

                // find first tag and last tag
                if (tagList.length > 0) {
                    firstTag = tagList[0];
                    lastTag = tagList[tagList.length - 1];
                }

                if (firstTag === currentTag) {
                    $scrollWrapper.scrollLeft = 0;
                } else if (lastTag === currentTag) {
                    $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth;
                } else {
                    // find preTag and nextTag
                    const currentIndex = tagList.findIndex(item => item === currentTag);
                    const prevTag = tagList[currentIndex - 1];
                    const nextTag = tagList[currentIndex + 1];

                    // the tag's offsetLeft after of nextTag
                    const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;

                    // the tag's offsetLeft before of prevTag
                    const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing;

                    if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
                        $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
                    } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
                        $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
                    }
                }
            },
        },
    };
</script>

<style >
    .switch-button{
        position: absolute;
        top: 95%;
        width: calc(var(--swiper-navigation-size)/ 44 * 27);
        height: var(--swiper-navigation-size);
        margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        /*color: var(--swiper-navigation-color,var(--swiper-theme-color));*/
        color: dimgrey;

    }
    .switch-button-left{
        left: 10px;
        right: auto;
    }
    .switch-button-right{
        right: 10px;
        left: auto;
    }
    .swiper-wrapper{
        box-sizing: content-box;
        padding: 0 10px;
        margin: 0 10px;
    }
    .el-scrollbar__view{position: static}

    .scroll-container {
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .theme-message, .theme-picker-dropdown {
        z-index: 99999 !important
    }

    .theme-picker .el-color-picker__trigger {
        height: 26px !important;
        width: 26px !important;
        padding: 2px
    }

    .theme-picker-dropdown .el-color-dropdown__link-btn {
        display: none
    }

    .drawer-container {
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word
    }

    .drawer-container .drawer-title {
        margin-bottom: 12px;
        color: rgba(0, 0, 0, .85);
        font-size: 14px;
        line-height: 22px
    }

    .drawer-container .drawer-item {
        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        padding: 12px 0
    }

    .drawer-container .drawer-switch {
        float: right
    }

    .drawer-container .job-link {
        display: block;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0
    }

    .sidebarLogoFade-enter-active {
        -webkit-transition: opacity 1.5s;
        transition: opacity 1.5s
    }

    .sidebarLogoFade-enter, .sidebarLogoFade-leave-to {
        opacity: 0
    }

    .sidebar-logo-container {
        position: relative;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #2b2f3a;
        text-align: center;
        overflow: hidden
    }

    .sidebar-logo-container .sidebar-logo-link {
        height: 100%;
        width: 100%
    }

    .sidebar-logo-container .sidebar-logo-link .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px
    }

    .sidebar-logo-container .sidebar-logo-link .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle
    }

    .sidebar-logo-container.collapse .sidebar-logo {
        margin-right: 0
    }

    .scroll-container {
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        width: 100%
    }

    .scroll-container .el-scrollbar__bar {
        bottom: 0
    }

    .scroll-container .el-scrollbar__wrap {
        height: 49px
    }

    .tags-view-container {
        height: 34px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04)
    }

   .tags-view-item {
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px
    }

     .tags-view-item:first-of-type {
        margin-left: 15px
    }

     .tags-view-item:last-of-type {
        margin-right: 15px
    }

     .tags-view-item.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983
    }

     .tags-view-item.active:before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px
    }

    .tags-view-container .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 3000;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        -webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3)
    }

    .tags-view-container .contextmenu li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer
    }

    .tags-view-container .contextmenu li:hover {
        background: #eee
    }

    .tags-view-wrapper .tags-view-item .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
    }

    .tags-view-wrapper .tags-view-item .el-icon-close:before {
        -webkit-transform: scale(.6);
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px
    }

    .tags-view-wrapper .tags-view-item .el-icon-close:hover {
        background-color: #b4bccc;
        color: #fff
    }

</style>
