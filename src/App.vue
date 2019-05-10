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
    
    data() {
      return {
        visible: false,
        transitionName: ''
      }
    },
    mounted: function () {
     
    },
    mounted: function () {
    },
    components: {
      // Header,
      Footer
    }
  }
</script>
<style lang="scss">
</style>