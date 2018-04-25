<!--
* author: zhanghuan
* created: 2018/3/30
* describe: 头部
-->
<template>
  <header class="header">
    <div class="btn left-btn" @click="back">
      <i class="header-icon"></i>
    </div>
    <h2>{{label}}</h2>
    <div class="btn right-btn">
      <i class="header-icon"></i>
    </div>
  </header>
</template>

<script>
  export default {
    name: "comHeader",
    props: ['label'],
    methods: {
      /*
       * params: 无
       * return: 无
       * function: 返回方法
       * */
      back: function () {
        this.$emit('back');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/sass/common";
  .header {
    overflow-x: hidden;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    @include px2rem(height, 86px);
    @include px2rem(padding-left, 20px);
    @include px2rem(padding-right, 20px);
    background: $mainColor;
    display: -webkit-flex;
    display: flex;
    align-items: center;

    h2 {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      font-size: px2em(30px);
      font-weight: 500;
      color: #fff;
    }

    .btn {
      display: flex;
      align-items: center;
      height: 100%;
      -webkit-box-flex: .5;
      -ms-flex: .5;
      flex: .5;
      background: none;

      .header-icon {
        display: inline-block;
        @include px2rem(width, 15px);
        @include px2rem(height, 30px);
        background-size: 100% 100%;

        img{
          height: 100%;
        }
      }

    }

    .left-btn {
      text-align: left;
      .header-icon{
        background: url(../../assets/img/index/back.png) no-repeat center left;
      }
    }

    .right-btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: right;

      .icon-one{
        @include px2rem(width, 57px);
        @include px2rem(padding-right, 15px);
      }

      .icon-two{
        @include px2rem(width, 57px);
        @include px2rem(padding-left, 15px);
      }
    }
  }
</style>
