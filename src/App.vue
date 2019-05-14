<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  // import Header from './components/head.vue'
  import Footer from './components/footer.vue'
  export default {
    name: 'home',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        visible: false,
        isRouterAlive: true,
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true
        });
      },
    },
    //监听器
    watch: {
      // 方法1
      '$route'(to, from) { //监听路由是否变化
        // console.log(999)
        if (to.path == "/") { //跳转到哪个页面
          location.reload()
        }
      },
    },
    mounted: function () {},
    components: {
      // Header,
      Footer
    }
  }
</script>
<style lang="scss">
</style>