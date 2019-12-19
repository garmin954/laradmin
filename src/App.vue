<template>
  <div id="app">
    <Base />
  </div>
</template>

<script>
import Base from './components/layouts/Base.vue'
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
export default {
  name: 'app',
  components: {
    Base
  },
  mounted() {
    // window.console.log(this.$router['options']);
  }
  // created() {
  //   NProgress.start();  // 开始加载
  // },
  // mounted() {
  //   NProgress.done();  // 加载完成
  // }
}

  NProgress.start()
  // 给页面设置请求加载进度条效果
  window.onload = function() {
    NProgress.done()
  }
</script>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 5px;
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   : #535353;
  }
  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
  }
  html,body,#app{
    height: 100%;
    background: #f2f2f2;
  }
  a{text-decoration: none}
</style>

