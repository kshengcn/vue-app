<template>
  <div id="app">
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components: {
      'app-footer':Footer,
    },
  }
</script>

<style lang='stylus'>
  html,body{margin:0;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }
  .header{
    padding:20px;
    background: black;
    text-align: center
  }
  .footer{background: #666;color: white;text-align: center;padding:30px;}


  @import "./assets/base.styl"

</style>
