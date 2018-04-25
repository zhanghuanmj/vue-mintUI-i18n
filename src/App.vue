<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "styles/sass/common.scss";
  @import "styles/sass/reset.scss";
  #app {
    width: 100%;
    height: 100%;
    color: #3d3d3d;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app{
    &>div{
      @include px2rem(padding-top, 86px);
    }
  }
</style>
