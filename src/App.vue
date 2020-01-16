<template>
  <div id="app">
    <router-view></router-view>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<Header msg="Welcome to Your Vue.js + TypeScript App"/>-->
  </div>
</template>

<script lang="ts">
  // import { Component, Vue } from 'vue-property-decorator'
  // import Header from './components/Header.vue'
  //
  // @Component({
  //   components: {
  //     Header
  //   }
  // })
  // export default class App extends Vue {}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
