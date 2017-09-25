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

<style lang="scss" scoped>
  @import "styles/sass/reset.scss";
  @import "styles/sass/common.scss";
  #app {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app{
    &>div{
      @include px2rem(padding-top, 88px);
    }
  }
</style>
